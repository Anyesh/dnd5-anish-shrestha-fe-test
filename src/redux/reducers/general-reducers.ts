import { SET_LOADING } from "../actions/action-types";

export const loadingReducer = (state = { spin: false }, action: any) => {
  switch (action.type) {
    case SET_LOADING:
      return { spin: action.payload };

    default:
      return state;
  }
};
