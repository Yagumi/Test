import { createStore, applyMiddleware } from 'redux';
// import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/index';

// eslint-disable-next-line import/prefer-default-export
export const initStore = (initialState = {}) => {
  return createStore(
    rootReducer,
    initialState,
    // applyMiddleware(thunkMiddleware),
  );
};
