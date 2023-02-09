import * as types from "../types";

export const getCount = (data) => async (dispatch) => {
  dispatch({
    type: types.COUNT,
    payload: data,
  });
};
