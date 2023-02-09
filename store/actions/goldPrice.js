import * as types from "../types";

export const getGoldPrice = (data) => async (dispatch) => {
  dispatch({
    type: types.GOLDPRICE,
    payload: data,
  });
};
