import * as types from "../types";

export const getProductCategory = (data) => async (dispatch) => {
  dispatch({
    type: types.PRODUCTCATEGORY,
    payload: data,
  });
};
