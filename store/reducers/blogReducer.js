import * as types from "../types";
const initialState = null;

export const blogReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.BLOG:
      return {
        ...state,
        blog: payload,
      };
    default:
      return state;
  }
};
