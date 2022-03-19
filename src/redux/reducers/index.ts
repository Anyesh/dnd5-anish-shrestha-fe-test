import { combineReducers } from "redux";
import {
  ClassDetailsType,
  ClassesListType,
  LoadingType,
  spellDetailsType,
} from "src/@types";
import * as classReducer from "./class-reducer";
import { loadingReducer } from "./general-reducers";
import { spellDetailsReducer, spellListReducer } from "./spell-reducers";

export default combineReducers({
  classes: classReducer.classReducer,
  class: classReducer.classDetailsReducer,
  spell: spellListReducer,
  spellDetails: spellDetailsReducer,
  loading: loadingReducer,
});

export type RootStateType = {
  classes: ClassesListType;
  class: ClassDetailsType;
  spell: ClassesListType;
  spellDetails: spellDetailsType;
  loading: LoadingType;
};
