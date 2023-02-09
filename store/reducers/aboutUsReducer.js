import * as types from "../types";
const initialState = null;

export const aboutUsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ABOUT_US:
      return {
        ...state,
        aboutUs: payload,
      };
    default:
      return state;
  }
};
