import * as types from "../types";
const initialState = null;

export const blogNewReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.BLOGNEW:
      return {
        ...state,
        blogNew: payload,
      };
    default:
      return state;
  }
};
