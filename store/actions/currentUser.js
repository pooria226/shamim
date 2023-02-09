import * as types from "../types";

export const currentUser = (data) => async (dispatch) => {
  dispatch({
    type: types.CURRENT_USER,
    payload: data,
  });
};
