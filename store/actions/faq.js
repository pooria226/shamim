import * as types from "../types";

export const getFaq = (data) => async (dispatch) => {
  dispatch({
    type: types.FAQ,
    payload: data,
  });
};
