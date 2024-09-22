export const BASE_URL = 'http://13.52.61.229:3000/api'; // server
export const LOGIN_URL = BASE_URL + '/users/login';
export const REGISTER_URL = BASE_URL + '/users/register';


export const LISTING_BY_ID = BASE_URL + '/listing/get';
export const ALL_LISTING = BASE_URL + '/listings';
export const CREATE_LISTING = BASE_URL + '/listing/add';
export const UPDATE_LISTING = BASE_URL + '/listing/update';

export const ADD_BLOCKED_DATE = BASE_URL + '/listing/calendar/add';
export const REMOVE_BLOCKED_DATE = BASE_URL + '/listing/calendar/remove';
export const DELETE_LISTING = BASE_URL + '/listing/delete';
export const FILTER_LISTING = BASE_URL + '/listings/filter';
export const FILTER_COUNT = BASE_URL + '/listings/count';

export const DRAFT_LISTING = BASE_URL + '/listing/draft';
export const PENDING_LISTING = BASE_URL + '/listing/pending';
export const ACTIVE_LISTING = BASE_URL + '/listing/active';
export const DECLINED_LISTING = BASE_URL + '/listing/declined';

export const CREATE_BOOKING = BASE_URL + '/booking/create';
export const UNREAD_BOOKING = BASE_URL + '/bookings/unread';
export const ACTIVE_BOOKING = BASE_URL + '/bookings/active';
export const COMPLETED_BOOKING = BASE_URL + '/bookings/completed';
export const CANCELLED_BOOKING = BASE_URL + '/bookings/cancelled';
export const BOOKING_DETAILS = BASE_URL + '/booking/get';
export const BOOKING_CHAT = BASE_URL + '/chat/get';
export const NEW_CHAT = BASE_URL + '/chat/create';
