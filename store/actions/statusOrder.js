import * as types from "../types";

export const getStatusOrder = (data) => async (dispatch) => {
  dispatch({
    type: types.STATUSORDER,
    payload: data,
  });
};
