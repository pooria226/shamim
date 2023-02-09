import * as types from "../types";

export const getComment = (data) => async (dispatch) => {
  dispatch({
    type: types.COMMENT,
    payload: data,
  });
};
