import * as types from "../types";
const initialState = null;

export const blogTagReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.BLOGTAG:
      return {
        ...state,
        tag: payload,
      };
    default:
      return state;
  }
};
