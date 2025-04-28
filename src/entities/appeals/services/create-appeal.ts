import appeal from "../repository/appeal";

export const createAppeal = (topic: string, description?: string) =>
    appeal.create(topic, description);