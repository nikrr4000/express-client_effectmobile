import { AppealCanceled, AppealWithRelations, AppealResolved } from "../domain"
import appeal from "../repository/appeal"

type ErrorTypes = "not_found" | "validation" | "server" | "forbidden"
export type ResultObj<T> = {
    type: "ok" | "error", 
    value: T, 
    errorType?: ErrorTypes
}
export const createResultObj = <T>(type: "ok" | "error", value: T, errorType?: ErrorTypes):ResultObj<T> => ({type, value, errorType})
export const cleanUnnecessaryAppealFields = (appeal: AppealWithRelations) => {
  const {resolution, cancellation, ...baseProperties} = appeal

  if (appeal.status === "CANCELED" && cancellation) {
    return {...baseProperties, cancellation} as AppealCanceled
  } else if (appeal.status === "RESOLVED" && resolution){
    return {...baseProperties, resolution} as AppealResolved
  } else {
    return {...baseProperties}
  }
}

export const createAppealsList = async () => {
    try {
      const result = await appeal.findAll({resolution: true, cancellation: true});
      return createResultObj('ok', result);
    } catch (e) {
      const err = e as Error;
      console.error(`Error creating appeals list:`, err);
      return createResultObj('error', err.message, 'server');
    }
}

export const createAppeal = (topic:string, description?: string) => appeal.create(topic, description)

export const takeAppealOnWork = (id: string) => appeal.takeOnWork(id)

export const completeAppeal = (id: string, resolution?: string) => appeal.makeItDone(id, resolution)

export const cancelAppeal = (id: string, reason?: string) => appeal.cancel(id, reason)

export const cancelAllAppeals = () => appeal.cancelAll()

export const findAppealsByDateQuery = (leftDateStr: string, rightDateStr?:string) => {
    try {    
        let leftBorder: Date
        let rightBorder: Date
    
        if (rightDateStr) {
          const rightDate = new Date(rightDateStr);
            
          leftBorder = new Date(new Date(leftDateStr).setHours(0, 0, 0, 0));
          rightBorder = new Date(new Date(rightDateStr).setHours(23, 59, 59, 999));
        } else {
          leftBorder = new Date(new Date(leftDateStr).setHours(0, 0, 0, 0));
          rightBorder = new Date(new Date(leftDateStr).setHours(23, 59, 59, 999));
        }
    
        return appeal.findAll({datesQuery: [leftBorder, rightBorder]})
    } catch (e) {
        const err = e as Error
        console.error(`Error listing appeals": `, err);
        return createResultObj('error', err.message)
    }
}
