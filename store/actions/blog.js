import * as types from "../types";

export const getBlog = (data) => async (dispatch) => {
  dispatch({
    type: types.BLOG,
    payload: data,
  });
};
