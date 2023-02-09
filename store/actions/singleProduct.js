import * as types from "../types";

export const getSingleProduct = (data) => async (dispatch) => {
  dispatch({
    type: types.SINGLEPRODUCT,
    payload: data,
  });
};
