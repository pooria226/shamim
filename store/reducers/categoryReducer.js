import * as types from "../types";
const initialState = null;

export const categoryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.CATEGORY:
      return {
        ...state,
        category: payload,
      };
    default:
      return state;
  }
};
