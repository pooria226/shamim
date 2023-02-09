import * as types from "../types";

export const getContact = (data) => async (dispatch) => {
  dispatch({
    type: types.CONTACT,
    payload: data,
  });
};
