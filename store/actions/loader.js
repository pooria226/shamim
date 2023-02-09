import * as types from "../types";

export const activeLoader = () => async (dispatch) => {
  dispatch({
    type: types.SHOW_LOADER,
    payload: true,
  });
};

export const deactiveLoader = () => async (dispatch) => {
  dispatch({
    type: types.HIDE_LOADER,
    payload: false,
  });
};
