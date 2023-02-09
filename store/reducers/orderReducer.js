import * as types from "../types";
const initialState = null;

export const orderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ORDER:
      return {
        ...state,
        order: payload,
      };
    default:
      return state;
  }
};
