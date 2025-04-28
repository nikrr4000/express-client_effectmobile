import appeal from "../repository/appeal";
import { createResultObj } from "../utils";

export const createAppealsList = async () => {
    try {
      const result = await appeal.findAll({ resolution: true, cancellation: true });
  
      if (result.type === 'error') {
        return createResultObj('error', result.value, result.errorType);
      }
  
      return createResultObj('ok', result.value);
    } catch (e) {
      const err = e as Error;
      console.error(`Error creating appeals list:`, err);
      return createResultObj('error', err.message, 'server');
    }
  };