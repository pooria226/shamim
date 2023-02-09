import * as types from "../types";

export const getProduct = (data) => async (dispatch) => {
  dispatch({
    type: types.PRODUCT,
    payload: data,
  });
};
