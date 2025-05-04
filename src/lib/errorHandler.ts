import errorCodes from "#root/config/errorCodes";
import { Response } from 'express';

type ErrorCodes = typeof errorCodes;

export const errorHandler = (
    res: Response,
    errorType: keyof ErrorCodes | undefined,
    error: string
  ) => {
    const errorCode = errorType ? errorCodes[errorType] : 500;
    return res.status(errorCode).json({ error });
  };