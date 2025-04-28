import { AppealCanceled, AppealWithRelations, AppealResolved } from './domain.js';
import appeal from './repository/appeal.js';

type ErrorTypes = 'not_found' | 'validation' | 'server' | 'forbidden';
export type ResultObj<T> = {
  type: 'ok' | 'error';
  value: T;
  errorType?: ErrorTypes;
};
export const createResultObj = <T>(
  type: 'ok' | 'error',
  value: T,
  errorType?: ErrorTypes
): ResultObj<T> => ({ type, value, errorType });
export const cleanUnnecessaryAppealFields = (appeal: AppealWithRelations) => {
  const { resolution, cancellation, ...baseProperties } = appeal;

  if (appeal.status === 'CANCELED' && cancellation) {
    return { ...baseProperties, cancellation } as AppealCanceled;
  } else if (appeal.status === 'RESOLVED' && resolution) {
    return { ...baseProperties, resolution } as AppealResolved;
  } else {
    return { ...baseProperties };
  }
};




