import * as types from "../types";

export const getFavoriteLength = (data) => async (dispatch) => {
  dispatch({
    type: types.FAVORITELENGTH,
    payload: data,
  });
};
