import C from '../../constants';
import { usersDidLoad } from '../index'

describe("Get users from API", () => {

    it("should contain the usersDidLoad action type", () => {
        const action = usersDidLoad();
        expect(action.type).toEqual(C.USERS_DID_LOAD)
    })

    it("should have true in payload", () => {
        const action = usersDidLoad();
        expect(action.payload).toEqual(true);
    })

})