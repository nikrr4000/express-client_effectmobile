import errorCodes from "#root/config/errorCodes";
import { errorHandler } from "#root/lib/errorHandler";
import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodError } from 'zod';

export type ValidationType = 'body' | 'query' | 'params' | 'headers' | 'cookies';

export const validate = (schema: AnyZodObject, type: ValidationType = 'body') => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            const data = req[type]
            const validatedData = schema.parse(data)
            req[type] = validatedData

            return next();
        } catch (error) {
            if (error instanceof ZodError) {
                const formattedErrors = error.errors.map((err) => ({
                    path: err.path.join('.'),
                    message: err.message,
                    code: err.code
                }));
                return res
                    .status(errorCodes.validation)
                    .json({
                        status: 'error',
                        message: 'Validation failed',
                        errors: formattedErrors,
                    });;
            } else {
                return errorHandler(res, undefined, "Internal server error.")
            }
        }
    }
};