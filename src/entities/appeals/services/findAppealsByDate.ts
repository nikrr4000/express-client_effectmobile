import appeal from "../repository/appeal";
import { createResultObj } from "../utils";

export const findAppealsByDateQuery = (leftDateStr: string, rightDateStr?: string, take?: number, skip?: number) => {
    try {
      let leftBorder: Date;
      let rightBorder: Date;
  
      if (rightDateStr) {  
        leftBorder = new Date(new Date(leftDateStr).setHours(0, 0, 0, 0));
        rightBorder = new Date(new Date(rightDateStr).setHours(23, 59, 59, 999));
      } else {
        leftBorder = new Date(new Date(leftDateStr).setHours(0, 0, 0, 0));
        rightBorder = new Date(new Date(leftDateStr).setHours(23, 59, 59, 999));
      }
  
      return appeal.findAll({
        datesQuery: [leftBorder, rightBorder],
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
  };