import * as types from "../types";
const initialState = null;

export const goldPriceReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GOLDPRICE:
      return {
        ...state,
        price: payload,
      };
    default:
      return state;
  }
};
