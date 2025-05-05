import appeal from "../repository/appeal";
import { createResultObj } from "../utils";

export const createAppealsList = async (take: number, skip: number, fromStr: string, toStr?: string) => {
      try {
            const from = new Date(new Date(fromStr).setHours(0,0,0,0));
            const to = new Date(new Date(toStr || fromStr).setHours(23, 59, 59, 999))

            if (from > to){
                  return createResultObj("error", "from cannot be later than to.")
            }
            
            return appeal.findAll({
                  datesQuery: [from, to],
                  resolution: true,
                  cancellation: true,
                  take, 
                  skip
            });
      } catch (e) {
            const err = e as Error;
            console.error(`Error listing appeals": `, err);
            return createResultObj('error', err.message);
      }
}