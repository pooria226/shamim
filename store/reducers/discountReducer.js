import * as types from "../types";
const initialState = null;

export const discountReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.DISCOUNT:
      return {
        ...state,
        discount: payload,
      };
    default:
      return state;
  }
};
