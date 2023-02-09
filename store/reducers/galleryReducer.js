import * as types from "../types";
const initialState = null;

export const galleryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GALLERY:
      return {
        ...state,
        gallery: payload,
      };
    default:
      return state;
  }
};
