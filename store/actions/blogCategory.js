import * as types from "../types";

export const getBlogCategory = (data) => async (dispatch) => {
  dispatch({
    type: types.BLOGCATEGORY,
    payload: data,
  });
};
