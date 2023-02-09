import * as types from "../types";

export const getOrderLength = (data) => async (dispatch) => {
  dispatch({
    type: types.ORDERLENGTH,
    payload: data,
  });
};
