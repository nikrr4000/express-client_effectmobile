import appeal from "../repository/appeal";

export const completeAppeal = (id: string, resolution?: string) => appeal.makeItDone(id, resolution);