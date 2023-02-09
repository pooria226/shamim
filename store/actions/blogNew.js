import * as types from "../types";

export const getBlogNew = (data) => async (dispatch) => {
  dispatch({
    type: types.BLOGNEW,
    payload: data,
  });
};
