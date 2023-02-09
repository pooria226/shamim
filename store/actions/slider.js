import * as types from "../types";

export const getSlider = (data) => async (dispatch) => {
  dispatch({
    type: types.SLIDER,
    payload: data,
  });
};
