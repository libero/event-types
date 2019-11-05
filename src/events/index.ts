export interface ServiceStartedPayload {
  name: string;
  type: string;
}

export interface UserLoggedInPayload {
  name: string;
  userId: string;
  email: string;
  timestamp: Date;
  result: string;
}

export enum LiberoEventType {
  serviceStartedIdentifier = 'libero:infra:audit:ServiceStarted',
  userLoggedInIdentifier = 'libero:audit:user:LoggedIn',
}
