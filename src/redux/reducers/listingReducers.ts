import { ActionTypes } from '../constants';

const initialState = {
    listing: [],
    new_listing: null,
    update_listing: null,
    listingby_ID: [],
    activeListing: [],
    pendingListing: [],
    declinedListing: [],
    draftListing: [],
    filterList: [],
    filterCount: null,


};
function listingReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ActionTypes.CREATE_LISTING:
            return { ...state, new_listing: payload };
        case ActionTypes.UPDATE_LISTING:
            return { ...state, update_listing: payload };
        case ActionTypes.ADD_BLOCKED_DATE:
            return { ...state, update_listing: payload };
        case ActionTypes.REMOVE_BLOCKED_DATE:
            return { ...state, update_listing: payload };
        case ActionTypes.DELETE_LISTING:
            return { ...state, update_listing: payload };
        case ActionTypes.GET_LISTING_BY_ID:
            return { ...state, listingby_ID: payload };
        case ActionTypes.FILTER_LISTING:
            return { ...state, filterList: payload };
        case ActionTypes.FILTER_COUNT:
            return { ...state, filterCount: payload };
        case ActionTypes.GET_DECLINED_LISTING:
            return { ...state, declinedListing: payload };
        case ActionTypes.GET_PENDING_LISTING:
            return { ...state, pendingListing: payload };
        case ActionTypes.GET_DRAFT_LISTING:
            return { ...state, draftListing: payload };
        case ActionTypes.GET_ACTIVE_LISTING:
            return { ...state, activeListing: payload };
        case ActionTypes.GET_ALL_LISTING:
            return { ...state, listing: payload };
        case ActionTypes.RESET_ALL:
            return initialState;
        default:
            return state;
    }
}
export default listingReducer;
