import * as types from "../types";

export const getDiscount = (data) => async (dispatch) => {
  dispatch({
    type: types.DISCOUNT,
    payload: data,
  });
};
