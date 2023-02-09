import * as types from "../types";
const initialState = {
  showLoader: false,
};

export const loaderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SHOW_LOADER:
      return {
        ...state,
        showLoader: true,
      };
    case types.HIDE_LOADER:
      return {
        ...state,
        showLoader: false,
      };
    default:
      return state;
  }
};
