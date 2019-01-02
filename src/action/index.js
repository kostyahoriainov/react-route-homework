import C from '../constants';

export function getUsers (users) {
    return {
        type: C.GET_USERS,
        payload: {
            users
        }
    }
}

export function usersDidLoad () {
    return {
        type: C.USERS_DID_LOAD,
        payload: true
    }
}