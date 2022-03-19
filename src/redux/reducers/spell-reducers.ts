import { ActionType, ClassesListType } from "src/@types";
import { GET_SPELL, GET_SPELL_DETAILS } from "../actions/action-types";

const initialState = {};

interface ClassesType extends ActionType {
  payload: ClassesListType;
}
export const spellListReducer = (state = initialState, action: ClassesType) => {
  switch (action.type) {
    case GET_SPELL:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const spellDetailsReducer = (
  state = initialState,
  action: ClassesType
) => {
  switch (action.type) {
    case GET_SPELL_DETAILS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
