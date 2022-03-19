import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import { ActionType } from "src/@types";
import rootReducer, { RootStateType } from "./reducers";

const initialState = {};

const middleware = [thunkMiddleware, logger];

export type ThunkDispatchType = ThunkAction<
  void | Promise<void>,
  RootStateType,
  unknown,
  RootActionsTypes
>;

export type RootActionsTypes = ActionType;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
  }
}

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    (window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()) ||
      compose
  )
);

export default store;
