import { prisma } from '#root/lib/db.js';
import {
  AppealCanceled,
  AppealWithRelations,
  AppealResolved,
  AppealPending,
  AppealCreated,
} from '../domain.js';
import { cleanUnnecessaryAppealFields, createResultObj, ResultObj } from '../services/utils.js';

const create = async (topic: string, description?: string) => {
  try {
    const createdAppeal = await prisma.appeal.create({
      data: {
        status: 'NEW',
        topic,
        description,
      },
    });

    return createResultObj('ok', createdAppeal as AppealCreated);
  } catch (e) {
    return handleRepositoryError(e, 'createAppeal');
  }
};

const findAppeal = async (id: string, resolution?: boolean, cancellation?: boolean) => {
  try {
    const appeal = await prisma.appeal.findFirst({
      where: {
        id,
      },
      include: {
        resolution,
        cancellation,
      },
    });
    return createResultObj('ok', appeal as AppealWithRelations);
  } catch (error) {
    return handleRepositoryError(error, 'findAppeal');
  }
};

const takeOnWork = async (id: string) => {
  try {
    const appealRequestRes = await findAppeal(id, true, true);
    if (appealRequestRes.type === 'error') return appealRequestRes as ResultObj<string>;

    const { value: appealObj } = appealRequestRes;
    const appeal = appealObj as AppealWithRelations;
    if (!appeal) return createResultObj('error', `No appeal with id ${id}`, 'not_found');

    switch (appeal.status) {
      case 'NEW':
        const update = await prisma.appeal.update({
          data: { status: 'PENDING' },
          where: { id },
        });

        return createResultObj('ok', update as AppealPending);

      case 'PENDING':
        const errMessage = `Appeal with id ${id} is already being processed.`;
        return createResultObj('error', errMessage, 'forbidden');

      case 'CANCELED': {
        const [update] = await prisma.$transaction([
          prisma.appeal.update({
            data: { status: 'PENDING' },
            where: { id },
          }),
          ...(appeal.cancellation
            ? [
                prisma.appealCancellation.delete({
                  where: { appealId: id },
                }),
              ]
            : []),
        ]);

        return createResultObj('ok', update as AppealPending);
      }

      case 'RESOLVED': {
        const [update] = await prisma.$transaction([
          prisma.appeal.update({
            data: { status: 'PENDING' },
            where: { id },
          }),
          ...(appeal.resolution
            ? [
                prisma.appealResolution.delete({
                  where: { appealId: id },
                }),
              ]
            : []),
        ]);

        return createResultObj('ok', update as AppealPending);
      }

      default:
        return createResultObj('error', 'Internal error.', 'server');
    }
  } catch (e) {
    return handleRepositoryError(e, 'takeOnWork');
  }
};

const cancel = async function (id: string, reason?: string) {
  try {
    const appealRequestRes = await findAppeal(id, true, true);
    if (appealRequestRes.type === 'error') return appealRequestRes as ResultObj<string>;

    const { value: appealObj } = appealRequestRes;
    const appeal = appealObj as AppealWithRelations;
    if (!appeal) return createResultObj('error', `No appeal with id ${id}`, 'not_found');

    if (appeal.status === 'NEW' || appeal.status === 'PENDING') {
      const [updateData, createData] = await prisma.$transaction([
        prisma.appeal.update({
          where: { id },
          data: { status: 'CANCELED' },
        }),
        ...(reason
          ? [
              prisma.appealCancellation.create({
                data: { reason, appealId: id },
              }),
            ]
          : []),
      ]);

      const resultObj = {
        ...updateData,
        cancellation: {
          ...createData,
        },
      } as AppealCanceled;

      return createResultObj('ok', resultObj);
    } else {
      const elseText =
        'Only appeals with statuses NEW or PENDING can be changed to CANCELED status.';
      return createResultObj('error', elseText, 'forbidden');
    }
  } catch (e) {
    return handleRepositoryError(e, 'cancel');
  }
};

const cancelAll = async function () {
  try {
    const updateRes = await prisma.appeal
      .updateManyAndReturn({
        where: {
          OR: [{ status: 'PENDING' }, { status: 'NEW' }],
        },
        data: {
          status: 'CANCELED',
        },
      })
      .then((appeals) =>
        appeals.map((appeal) => ({ ...appeal, cancellation: null }) as AppealCanceled)
      );

    return createResultObj('ok', updateRes);
  } catch (e) {
    return handleRepositoryError(e, 'cancelAll');
  }
};

const makeItDone = async function (id: string, text?: string) {
  try {
    const appealRequestRes = await findAppeal(id, true, true);
    if (appealRequestRes.type === 'error') return appealRequestRes as ResultObj<string>;

    const { value: appealObj } = appealRequestRes;
    const appeal = appealObj as AppealWithRelations;
    if (!appeal) return createResultObj('error', `No appeal with id ${id}`, 'not_found');

    if (appeal.status === 'NEW' || appeal.status === 'PENDING') {
      const [updateData, createData] = await prisma.$transaction([
        prisma.appeal.update({
          where: { id },
          data: { status: 'RESOLVED' },
        }),
        ...(text
          ? [
              prisma.appealResolution.create({
                data: { text, appealId: id },
              }),
            ]
          : []),
      ]);

      const resultObj = {
        ...updateData,
        resolution: {
          ...createData,
        },
      } as AppealResolved;

      return createResultObj('ok', resultObj);
    } else {
      const elseText =
        'Only appeals with statuses NEW or PENDING can be changed to RESOLVED status.';
      return createResultObj('error', elseText, 'forbidden');
    }
  } catch (e) {
    return handleRepositoryError(e, 'makeItDone');
  }
};

const findAll = async ({
  datesQuery,
  resolution,
  cancellation,
}: {
  datesQuery?: [Date, Date];
  resolution?: boolean;
  cancellation?: boolean;
}) => {
  try {
    const where = datesQuery
      ? {
          createdAt: {
            gte: datesQuery[0],
            lte: datesQuery[1],
          },
        }
      : {};

    const appeals = (await prisma.appeal
      .findMany({
        where,
        orderBy: {
          createdAt: 'desc',
        },
        include: {
          resolution,
          cancellation,
        },
      })
      .then((appeals) =>
        appeals.map((appeal) => cleanUnnecessaryAppealFields(appeal as AppealWithRelations))
      )) as AppealWithRelations[];

    return createResultObj('ok', appeals);
  } catch (e) {
    return handleRepositoryError(e, 'findAll');
  }
};

const handleRepositoryError = (e: unknown, operation: string): ResultObj<string> => {
  const error = e as Error;
  console.error(`Error in ${operation}:`, error);
  return createResultObj(
    'error',
    error.message || 'Internal error.',
    error.name === 'PrismaClientKnownRequestError' ? 'not_found' : 'server'
  );
};

export default { findAll, makeItDone, cancel, cancelAll, takeOnWork, create };
