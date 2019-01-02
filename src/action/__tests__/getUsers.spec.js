import C from '../../constants';
import { getUsers } from '../index'

describe("Get users from API", () => {
    it("should contain the getUsers action type", () => {
        const action = getUsers();
        expect(action.type).toEqual(C.GET_USERS)
    })

    it("should receive users in payload", () => {
        const user = {
            name: 'Test',
            email: 'test@gmail.com',
            age: 30
        }
        const action = getUsers(user);
        expect(action.payload.users.name).toEqual('Test')
        expect(action.payload.users.email).toEqual('test@gmail.com')
        expect(action.payload.users.age).toEqual(30)
    })

})