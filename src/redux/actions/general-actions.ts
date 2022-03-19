import { SET_LOADING } from "./action-types";

export const setLoading = (data: Boolean) => {
  return {
    type: SET_LOADING,
    payload: data,
  };
};
