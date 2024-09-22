import { ActionTypes } from '../constants';

const initialState = {
    activeBookings: [],
    completedBookings: [],
    cancelledBookings: [],
    unreadBookings: [],
    new_booking: null,
    booking_details: [],
    booking_chat: [],
    chat: [],

};
function bookingReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ActionTypes.CREATE_BOOKING:
            return { ...state, new_booking: payload };
        case ActionTypes.GET_ACTIVE_BOOKING:
            return { ...state, activeBookings: payload };
        case ActionTypes.GET_COMPLETED_BOOKING:
            return { ...state, completedBookings: payload };
        case ActionTypes.GET_CANCELLED_BOOKING:
            return { ...state, cancelledBookings: payload };
        case ActionTypes.GET_UNREAD_BOOKING:
            return { ...state, unreadBookings: payload };
        case ActionTypes.GET_BOOKING_BY_ID:
            return { ...state, booking_details: payload };
        case ActionTypes.GET_BOOKING_CHAT:
            return { ...state, booking_chat: payload };
        case ActionTypes.CREATE_NEW_CHAT:
            return { ...state, chat: payload };
        case ActionTypes.RESET_ALL:
            return initialState;
        default:
            return state;
    }
}
export default bookingReducer;
