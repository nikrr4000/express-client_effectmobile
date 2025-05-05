import { Request, Response } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { Query as ExpressQuery } from 'express-serve-static-core';
import { ParsedQs } from 'qs';
import {
  createAppealsList,
  createAppeal,
  takeAppealOnWork,
  completeAppeal,
  cancelAppeal,
  cancelAllAppeals,
} from '#root/entities/appeals/index.js';
import { AppealIdParam, AppealQueryParams, CancelAppealBody, CompleteAppealBody, CreateAppealBody } from '#root/schemas';
import { errorHandler } from '#root/lib/errorHandler';

interface TypedRequestBody<T> extends Request {
  body: T & ParsedQs;
}

interface TypedRequestParams<T extends ParamsDictionary> extends Request {
  params: T;
}

interface TypedRequestQuery<T extends ExpressQuery> extends Request {
  query: T & ParsedQs;
}

interface TypedRequest<Body, Params extends ParamsDictionary, Query extends ExpressQuery> extends Request {
  body: Body;
  params: Params;
  query: Query;
}

export const appealController = {
  create: async (req: TypedRequestBody<CreateAppealBody>, res: Response) => {
    try {
      const { body } = req;
      const { topic, description } = body;

      const result = await createAppeal(topic, description);
      if (result.type === 'error') {
        return errorHandler(res, result.errorType, result.value as string);
      }

      return res.status(200).json({
        success: true,
        data: result.value,
      });
    } catch (error) {
      console.error('Error in createAppeal controller:', error);
      return res.status(500).json({
        error: 'An unexpected error occurred while processing your request.',
      });
    }
  },
  take: async (req: TypedRequestParams<AppealIdParam>, res: Response) => {
    try {
      const { id } = req.params;

      const result = await takeAppealOnWork(id);
      if (result.type === 'error') {
        return errorHandler(res, result.errorType, result.value as string);
      }

      return res.status(200).json({
        success: true,
        data: result.value,
      });
    } catch (error) {
      console.error('Error in takeAppeal controller:', error);
      return res.status(500).json({
        error: 'An unexpected error occurred while processing your request.',
      });
    }
  },
  complete: async (req: TypedRequest<CompleteAppealBody, AppealIdParam, never>, res: Response) => {
    try {
      const { id } = req.params;
      const { resolution } = req.body;

      const result = await completeAppeal(id, resolution);
      if (result.type === 'error') {
        return errorHandler(res, result.errorType, result.value as string);
      }

      return res.status(200).json({
        success: true,
        data: result.value,
      });
    } catch (error) {
      console.error('Error in completeAppeal controller:', error);
      return res.status(500).json({
        error: 'An unexpected error occurred while processing your request.',
      });
    }
  },
  cancel: async (req: TypedRequest<CancelAppealBody, AppealIdParam, never>, res: Response) => {
    try {
      const { id } = req.params;
      const { reason } = req.body;

      const result = await cancelAppeal(id, reason);
      if (result.type === 'error') {
        return errorHandler(res, result.errorType, result.value as string);
      }

      return res.status(200).json({
        success: true,
        data: result.value,
      });
    } catch (error) {
      console.error('Error in cancelAppeal controller:', error);
      return res.status(500).json({
        error: 'An unexpected error occurred while processing your request.',
      });
    }
  },
  cancelAll: async (_: Request, res: Response) => {
    try {
      const result = await cancelAllAppeals();
      if (result.type === 'error') {
        return errorHandler(res, result.errorType, result.value as string);
      }

      return res.status(200).json({
        success: true,
        data: result.value,
      });
    } catch (error) {
      console.error('Error in cancelAppeal controller:', error);
      return res.status(500).json({
        error: 'An unexpected error occurred while processing your request.',
      });
    }
  },
  list: async (req: TypedRequestQuery<AppealQueryParams>, res: Response) => {
    try {
      const { from, to, page, pageSize } = req.query;
      const skip = (+page - 1) * +pageSize

      console.log(req.query);

      const result = await createAppealsList(+pageSize, skip, from, to);

      if (result.type === 'error') {
        return errorHandler(res, result.errorType, result.value as string);
      }

      return res.status(200).json({
        success: true,
        data: result.value,
      });
    } catch (error) {
      console.error('Error in listAppeals controller:', error);
      return res.status(500).json({
        error: 'An unexpected error occurred while processing your request.',
      });
    }
  },
};
