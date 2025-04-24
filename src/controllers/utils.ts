import { Response } from 'express';

export const errorCodes = {
  not_found: 404,
  validation: 400,
  server: 500,
  forbidden: 403,
};

type ErrorCodes = typeof errorCodes;

export const errorHandler = (
  res: Response,
  errorType: keyof ErrorCodes | undefined,
  error: string
) => {
  const errorCode = errorType ? errorCodes[errorType] : 500;

  return res.status(errorCode).json({ error });
};

export const isValidDate = (dateStr: string) => {
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(dateStr)) return false;
  const date = new Date(dateStr);
  return date instanceof Date && !isNaN(date.getTime());
};
