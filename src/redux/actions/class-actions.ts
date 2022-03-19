import axios from "axios";
import { ActionType } from "src/@types";
import { ROOT_API } from "../../config/api";
import { GET_CLASS_DETAILS, GET_CLASS_LIST } from "./action-types";
import { setLoading } from "./general-actions";

export const getClassList = () => (dispatch: (arg: ActionType) => void) => {
  dispatch(setLoading(true));
  axios
    .get(`${ROOT_API}/classes`)
    .then((res) => {
      dispatch({
        type: GET_CLASS_LIST,
        payload: res.data,
      });
      dispatch(setLoading(false));
    })
    .catch(() => {
      dispatch({
        type: GET_CLASS_LIST,
        payload: [],
      });
      dispatch(setLoading(false));
    });
};

export const getClassDetails =
  (id: string | null) => (dispatch: (arg: ActionType) => void) => {
    dispatch(setLoading(true));
    if (id) {
      axios
        .get(`${ROOT_API}/classes/${id}`)
        .then((res) => {
          dispatch({
            type: GET_CLASS_DETAILS,
            payload: res.data,
          });
          dispatch(setLoading(false));
        })
        .catch(() => {
          dispatch({
            type: GET_CLASS_DETAILS,
            payload: {},
          });
          dispatch(setLoading(false));
        });
    } else {
      dispatch({
        type: GET_CLASS_DETAILS,
        payload: {},
      });
      dispatch(setLoading(false));
    }
  };
