import C from '../constants';

const defaultState = {
    isLoaded: false,
    users: {}
}

export default (state = defaultState, action) => {
    const { type, payload } = action;
    switch(type) {
        case C.GET_USERS:
            return {
                ...state,
                users: payload.users
            }
        case C.USERS_DID_LOAD:
            return {
                ...state,
                isLoaded: payload
            }
        default:
            return state
    } 
}