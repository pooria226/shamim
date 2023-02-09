import * as types from "../types";

export const getOrder = (data) => async (dispatch) => {
  dispatch({
    type: types.ORDER,
    payload: data,
  });
};
