import {z} from "zod"

const MAX_SAFE_BIGINT = BigInt('9223372036854775807');

const getTodayDate = () => new Date().toISOString().split('T')[0];;

const fromSchema = z
    .string()
    .date('from must be a valid date in YYYY-MM-DD format.')
    .optional()
    .default(getTodayDate())

const toSchema = z
    .string()
    .date('to must be a valid date in YYYY-MM-DD format.')
    .optional()

const pageSchema = z
    .string()
    .optional()
    .refine(v => !v || (parseInt(v, 10) > 0), {
        message: "Page must be greater than 0."
    })
    .refine(v => !v || (parseInt(v, 10) <= Number(MAX_SAFE_BIGINT)), {
        message: "Page number exceeds 64-bit integer limit."
    })
    .default("1")
    
const pageSizeSchema = z
    .string()
    .optional()
    .refine(v => !v || (parseInt(v, 10) > 0), {
        message: "Page must be greater than 0."
    })
    .refine(v => !v || (parseInt(v, 10) <= 100), {
        message: "The maximum page size is 100."
    })
    .default("10")

const appealIdSchema = z
    .string({message: "Use :id param."})
    .refine(v => !Number.isNaN(+v), {
        message: "Id must be an integer type."
    })
    .refine(v => parseInt(v, 10) > 0, {
        message: "Id must be greater than 0."
    })
    .refine(v => !v || (parseInt(v, 10) <= Number(MAX_SAFE_BIGINT)), {
        message: "Page number exceeds 64-bit integer limit."
    })
const appealReasonSchema = z
    .string({message: "Appeal reason must have a string type."})
    .optional()
const appealResoulutionSchema = z
    .string({message: "Appeal reason must have a string type."})
    .optional()
const appealTopicSchema = z
    .string({message: "You must state appeal topic."})
    .refine(v => v.length < 1000, {message: "Appeal topic must have less than 1000 symbols."})
    .refine(v => v.length > 5, {message: "Appeal topic must have at least 5 symbols."})
const appealDescriptionSchema = z
    .string()
    .optional()
    .refine(v => !v || v.length < 10000, {message: "Appeal description must have less than 10000 symbols."})
    
const appealListQuerySchema = z.object({
    from: fromSchema,
    to: toSchema,
    page: pageSchema,
    pageSize: pageSizeSchema,
})

const appealIdParamSchema = z.object({
    id: appealIdSchema
})
const cancelAppealSchema = z.object({
    reason: appealReasonSchema
})
const completeAppealSchema = z.object({
    resolution: appealResoulutionSchema
})
const createAppealSchema = z.object({
    topic: appealTopicSchema,
    description: appealDescriptionSchema
})

export type AppealQueryParams = z.infer<typeof appealListQuerySchema>
export type CancelAppealBody = z.infer<typeof cancelAppealSchema>
export type CompleteAppealBody = z.infer<typeof completeAppealSchema>
export type CreateAppealBody = z.infer<typeof createAppealSchema>
export type AppealIdParam = z.infer<typeof appealIdParamSchema>

export const appealSchema = { 
    appealListQuerySchema, 
    appealIdParamSchema, 
    cancelAppealSchema,
    completeAppealSchema,
    createAppealSchema
}