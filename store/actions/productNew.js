import * as types from "../types";

export const getProductNew = (data) => async (dispatch) => {
  dispatch({
    type: types.PRODUCTNEW,
    payload: data,
  });
};
