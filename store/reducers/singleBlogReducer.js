import * as types from "../types";
const initialState = null;

export const singleBlogReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SINGLEBLOG:
      return {
        ...state,
        singleBlog: payload,
      };
    default:
      return state;
  }
};
