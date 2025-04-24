import { Request, Response } from 'express';
import {
  createAppealsList,
  findAppealsByDateQuery,
  createAppeal,
  takeAppealOnWork,
  completeAppeal,
  cancelAppeal,
  cancelAllAppeals,
} from '#root/entities/appeals/index.js';
import { errorHandler, isValidDate } from './utils';

export const appealController = {
  create: async (req: Request, res: Response) => {
    try {
      const { body } = req;
      const { topic, description } = body;

      if (!topic) {
        return res.status(400).json({
          error: 'Request must have a topic.',
        });
      }
      if (typeof topic !== 'string' || (description && typeof description !== 'string')) {
        return res.status(400).json({
          error: 'Appeal topic and description must have string types.',
        });
      }

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
  take: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          error: 'Request must have an appeal id.',
        });
      }

      if (typeof id !== 'string') {
        return res.status(400).json({
          error: 'Appeal id must have string type.',
        });
      }

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
  complete: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { resolution } = req.body;

      if (!id) {
        return res.status(400).json({
          error: 'Request must have an appeal id.',
        });
      }

      if (typeof id !== 'string' || (resolution && typeof resolution !== 'string')) {
        return res.status(400).json({
          error: 'Appeal id and resolution must have string type.',
        });
      }

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
  cancel: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { reason } = req.body;

      if (!id) {
        return res.status(400).json({
          error: 'Request must have an appeal id.',
        });
      }

      if (typeof id !== 'string' || (reason && typeof reason !== 'string')) {
        return res.status(400).json({
          error: 'Appeal id and reason must have string type.',
        });
      }

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
  cancelAll: async (req: Request, res: Response) => {
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
  list: async (req: Request, res: Response) => {
    try {
      const { date, startDate, endDate } = req.query;

      let result;

      if (date) {
        if (!isValidDate(date.toString())) {
          return res.status(400).json({
            error: 'Invalid date format. Use YYYY-MM-DD format.',
          });
        }

        result = await findAppealsByDateQuery(date.toString());
      } else if (startDate && endDate) {
        if (!isValidDate(startDate.toString()) || !isValidDate(endDate.toString())) {
          return res.status(400).json({
            error: 'Invalid date format. Use YYYY-MM-DD format for both startDate and endDate.',
          });
        }

        const start = new Date(startDate.toString());
        const end = new Date(endDate.toString());

        if (start > end) {
          return res.status(400).json({
            error: 'startDate cannot be later than endDate.',
          });
        }

        result = await findAppealsByDateQuery(startDate.toString(), endDate.toString());
      } else {
        result = await createAppealsList();
      }

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
