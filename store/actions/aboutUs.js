import * as types from "../types";

export const getAboutUs = (data) => async (dispatch) => {
  dispatch({
    type: types.ABOUT_US,
    payload: data,
  });
};
