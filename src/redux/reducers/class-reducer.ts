import { ActionType, ClassesListType } from "src/@types";
import { GET_CLASS_DETAILS, GET_CLASS_LIST } from "../actions/action-types";

const initialState = {};

interface ClassesType extends ActionType {
  payload: ClassesListType;
}

export const classReducer = (state = initialState, action: ClassesType) => {
  switch (action.type) {
    case GET_CLASS_LIST:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export const classDetailsReducer = (
  state = initialState,
  action: ClassesType
) => {
  switch (action.type) {
    case GET_CLASS_DETAILS:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
