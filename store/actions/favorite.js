import * as types from "../types";

export const getFavorite = (data) => async (dispatch) => {
  dispatch({
    type: types.FAVORITE,
    payload: data,
  });
};
