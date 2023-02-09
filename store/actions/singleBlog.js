import * as types from "../types";

export const getSingleBlog = (data) => async (dispatch) => {
  dispatch({
    type: types.SINGLEBLOG,
    payload: data,
  });
};
