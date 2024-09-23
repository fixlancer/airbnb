import thunk from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import logger from 'redux-logger';
import {useDispatch} from 'react-redux';
import authReducers from '../reducers/authReducers';
import bookingReducers from '../reducers/bookingReducers';
import listingReducers from '../reducers/listingReducers';

const rootReducer = combineReducers({
  authReducers,
  bookingReducers,
  listingReducers,
});
let middleware = [logger, thunk];

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware)),
);

