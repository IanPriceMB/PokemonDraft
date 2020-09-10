import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import notificationReducer from './notification';
import timerReducer from './timer';
import gameReducer from './game';
import userReducer from './user';

const initialState = {};

const middleware = [thunk]

const rootReducer = combineReducers({
  notification: notificationReducer,
  timer: timerReducer,
  game: gameReducer,
  user: userReducer,
});

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;