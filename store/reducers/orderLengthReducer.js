import * as types from "../types";
const initialState = null;

export const orderLengthReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ORDERLENGTH:
      return {
        ...state,
        orderLength: payload,
      };
    default:
      return state;
  }
};
