export type Resolution = {
  id: string;
  appealId: string;
  text: string;
};

export type Cancellation = {
  id: string;
  appealId: string;
  reason: string;
};

export type Appeal = {
  id: string;
  topic: string;
  description: string | null;
  createdAt: string | Date;
};

export type AppealPending = Appeal & {
  status: 'PENDING';
  resolution: null;
  cancellation: null;
};

export type AppealCreated = Appeal & {
  status: 'NEW';
  resolution: null;
  cancellation: null;
};

export type AppealResolved = Appeal & {
  status: 'RESOLVED';
  resolution: Resolution | null;
  cancellation: null;
};

export type AppealCanceled = Appeal & {
  status: 'CANCELED';
  resolution: null;
  cancellation: Cancellation | null;
};

export type AppealWithRelations = AppealPending | AppealCreated | AppealResolved | AppealCanceled;
