import * as types from "../types";
const initialState = null;

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.PRODUCT:
      return {
        ...state,
        product: payload,
      };
    default:
      return state;
  }
};
