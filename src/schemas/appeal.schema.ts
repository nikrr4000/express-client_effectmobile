import {z} from "zod"

const MAX_SAFE_BIGINT = BigInt('9223372036854775807');

const dateSchema = z.string().date('date must be a valid date in YYYY-MM-DD format.').optional()
const startDateSchema = z.string().date('startDate must be a valid date in YYYY-MM-DD format.').optional()
const endDateSchema = z.string().date('endDate must be a valid date in YYYY-MM-DD format.').optional()
const pageSchema = z
    .string()
    .optional()
    .transform(v => v ? parseInt(v, 10) : 1)
    .refine(v => v > 0, {
        message: "Page must be greater than 0"
    })
    .refine(v=> v <= MAX_SAFE_BIGINT, {
        message: "Page number exceeds 64-bit integer limit."
    })
const pageSizeSchema = z
    .string()
    .optional()
    .transform(v => v ? parseInt(v, 10) : 10)
    .refine(v => v > 0, {
        message: "Page must be greater than 0"
    })
    .refine(v => v > 0, {
        message: "The maximum page size is 100"
    })
    
const querySchema = z.object({
    date: dateSchema,
    startDate: startDateSchema,
    endDate: endDateSchema,
    page: pageSchema,
    pageSize: pageSizeSchema,
})

export const appealSchema = { querySchema }