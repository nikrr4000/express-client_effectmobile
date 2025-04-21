export type AppealEntity = 
    AppealCreated | 
    AppealPending |
    AppealCanceled | 
    AppealResolved

export type Appeal = {
    id: string;
    topic: string;
    description: string | null;
    createdAt: Date
}

export type AppealPending = Appeal & {
    status: "PENDING"
}

export type AppealCreated = Appeal & {
    status: "NEW"
}

export type AppealResolved = Appeal & {
    status: "RESOLVED",
    text?: string
}

export type AppealCanceled = Appeal & {
    status: "CANCELED"
    reason?: string;
}