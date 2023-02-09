import * as types from "../types";

export const getGallery = (data) => async (dispatch) => {
  dispatch({
    type: types.GALLERY,
    payload: data,
  });
};
