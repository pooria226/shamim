import * as types from "../types";

export const getUser = (data) => async (dispatch) => {
  dispatch({
    type: types.USER,
    payload: data,
  });
};
