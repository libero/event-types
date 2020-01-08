import { Event } from '@libero/event-bus';
import { LiberoEventType } from '../';

export interface UserLoggedInPayload {
    userId: string;
    timestamp: Date;
    result: string;
}

export class UserLoggedInEvent extends Event {
    constructor(payload: UserLoggedInPayload) {
        super(LiberoEventType.userLoggedInIdentifier, payload);
    }
}
