import * as types from "../types";

export const openSidebar = (data) => async (dispatch) => {
  dispatch({
    type: types.OPEN_SIDEBAR,
    payload: true,
  });
};
export const closeSidebar = (data) => async (dispatch) => {
  dispatch({
    type: types.CLOSE_SIDEBAR,
    payload: true,
  });
};
