import appeal from "../repository/appeal";

export const cancelAppeal = (id: string, reason?: string) => appeal.cancel(id, reason);