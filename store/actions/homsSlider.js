import * as types from "../types";

export const getHomeSlider = (data) => async (dispatch) => {
  dispatch({
    type: types.HOME_SLIDER,
    payload: data,
  });
};
