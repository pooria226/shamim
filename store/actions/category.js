import * as types from "../types";

export const getCategory = (data) => async (dispatch) => {
  dispatch({
    type: types.CATEGORY,
    payload: data,
  });
};
