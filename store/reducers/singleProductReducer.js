import * as types from "../types";
const initialState = null;

export const singleProductReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case types.SINGLEPRODUCT:
      return {
        ...state,
        singleProduct: payload,
      };
    default:
      return state;
  }
};
