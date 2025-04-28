import appeal from "../repository/appeal";
import { createResultObj } from "../utils";

export const findAppealsByDateQuery = async (leftDateStr: string, rightDateStr?: string) => {
    try {
      let leftBorder: Date;
      let rightBorder: Date;
  
      if (rightDateStr) {
        const rightDate = new Date(rightDateStr);
  
        leftBorder = new Date(new Date(leftDateStr).setHours(0, 0, 0, 0));
        rightBorder = new Date(new Date(rightDateStr).setHours(23, 59, 59, 999));
      } else {
        leftBorder = new Date(new Date(leftDateStr).setHours(0, 0, 0, 0));
        rightBorder = new Date(new Date(leftDateStr).setHours(23, 59, 59, 999));
      }
  
      const result = await appeal.findAll({
        datesQuery: [leftBorder, rightBorder],
        resolution: true,
        cancellation: true,
      });
  
      if (result.type === 'error') {
        return createResultObj('error', result.value, result.errorType);
      }
  
      return createResultObj('ok', result.value);
    } catch (e) {
      const err = e as Error;
      console.error(`Error listing appeals": `, err);
      return createResultObj('error', err.message);
    }
  };