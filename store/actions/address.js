import * as types from "../types";

export const getAddress = (data) => async (dispatch) => {
  dispatch({
    type: types.ADDRESS,
    payload: data,
  });
};
