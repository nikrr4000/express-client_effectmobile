export const APPEAL_STATUS = {
    NEW: 'NEW',
    PENDING: 'PENDING',
    CANCELLED: 'CANCELLED',
    RESOLVED: 'RESOLVED'
} as const;

export type AppealStatus = typeof APPEAL_STATUS[keyof typeof APPEAL_STATUS]; 