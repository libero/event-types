import { UserLoggedInEvent, UserLoggedInPayload } from './UserLoggedIn';
import { LiberoEventType } from '../';

describe('UserLoggedInEvent', () => {
    const mockPayload: UserLoggedInPayload = {
        userId: 'TEST_ID',
        timestamp: new Date(),
        result: 'authenticated',
    };

    it('does not error on creation', () => {
        expect(() => new UserLoggedInEvent(mockPayload)).not.toThrowError();
    });

    it('correctly sets payload and eventType on event', () => {
        const event = new UserLoggedInEvent(mockPayload);
        expect(event.payload).toStrictEqual(mockPayload);
        expect(event.eventType).toBe(LiberoEventType.userLoggedInIdentifier);
    });
});
