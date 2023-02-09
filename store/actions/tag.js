import * as types from "../types";

export const getTags = (data) => async (dispatch) => {
  dispatch({
    type: types.TAGS,
    payload: data,
  });
};
