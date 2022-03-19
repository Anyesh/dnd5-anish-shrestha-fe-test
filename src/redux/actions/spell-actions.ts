import axios from "axios";
import { ActionType } from "src/@types";
import { ROOT_API } from "src/config";
import { GET_SPELL, GET_SPELL_DETAILS } from "./action-types";
import { setLoading } from "./general-actions";

export const getSpells =
  (id: string | null) => (dispatch: (arg: ActionType) => void) => {
    if (id) {
      dispatch(setLoading(true));
      axios
        .get(`${ROOT_API}/classes/${id}/spells`)
        .then((res) => {
          dispatch({
            type: GET_SPELL,
            payload: res.data,
          });
          dispatch(setLoading(false));
        })
        .catch(() => {
          dispatch({
            type: GET_SPELL,
            payload: {},
          });
          dispatch(setLoading(false));
        });
    } else {
      dispatch({
        type: GET_SPELL,
        payload: {},
      });
      dispatch(setLoading(false));
    }
  };

export const getSpellDetails =
  (id: string | null) => (dispatch: (arg: ActionType) => void) => {
    dispatch(setLoading(true));
    if (id) {
      axios
        .get(`${ROOT_API}/spells/${id}`)
        .then((res) => {
          dispatch({
            type: GET_SPELL_DETAILS,
            payload: res.data,
          });
          dispatch(setLoading(false));
        })
        .catch(() => {
          dispatch({
            type: GET_SPELL_DETAILS,
            payload: {},
          });
          dispatch(setLoading(false));
        });
    } else {
      dispatch({
        type: GET_SPELL_DETAILS,
        payload: {},
      });
      dispatch(setLoading(false));
    }
  };
