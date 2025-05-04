import appeal from "../repository/appeal";

export const createAppealsList = async (take: number, skip: number) => 
      appeal.findAll({ resolution: true, cancellation: true, take, skip })