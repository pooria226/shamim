import * as types from "../types";
const initialState = null;

export const productNewReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.PRODUCTNEW:
      return {
        ...state,
        productNew: payload,
      };
    default:
      return state;
  }
};
