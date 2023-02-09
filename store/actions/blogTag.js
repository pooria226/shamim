import * as types from "../types";

export const getBlogTag = (data) => async (dispatch) => {
  dispatch({
    type: types.BLOGTAG,
    payload: data,
  });
};
