import { ActionTypes } from '../constants';

const initialState = {
    users: null,
    userRole: null,
    uid: null,

};
function authReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ActionTypes.LOGIN_USER:
            return { ...state, users: payload };
        case ActionTypes.REGISTER_GUEST:
            return { ...state, users: payload };
        case ActionTypes.REGISTER_OWNER:
            return { ...state, users: payload };
        case ActionTypes.SET_ROLE:
            return { ...state, userRole: payload };
        case ActionTypes.SET_UID:
            return { ...state, uid: payload };
        case ActionTypes.RESET_ALL:
            return initialState;
        default:
            return state;
    }
}
export default authReducer;
