import * as types from "../types";
const initialState = null;

export const countReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.COUNT:
      return {
        ...state,
        count: payload,
      };
    default:
      return state;
  }
};
