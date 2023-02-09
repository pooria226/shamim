import * as types from "../types";

export const getUserBloger = (data) => async (dispatch) => {
  dispatch({
    type: types.USER_BLOGER,
    payload: data,
  });
};
