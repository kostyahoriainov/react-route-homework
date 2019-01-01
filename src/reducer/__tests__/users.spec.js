import users from '../users'
import { getUsers, usersDidLoad } from '../../action';

describe("users reducer", () => {
    it("should store users in the state", () => {
        const user = {
            name: 'Alex',
            email: 'Alex@gmail.com',
            age: 30
        }
        const newState = users(undefined, getUsers(user));
        expect(newState.users.name).toEqual('Alex');
        expect(newState.users.email).toEqual('Alex@gmail.com');
        expect(newState.users.age).toEqual(30);
        expect(newState.isLoaded).toEqual(false);
    })

    it("should store isLoaded in the state", () => {
        const newState = users(undefined, usersDidLoad());
        expect(newState.isLoaded).toEqual(true)
    })
})