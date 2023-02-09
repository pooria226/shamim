import * as types from "../types";
const initialState = null;

export const commentReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.COMMENT:
      return {
        ...state,
        comment: payload,
      };
    default:
      return state;
  }
};
