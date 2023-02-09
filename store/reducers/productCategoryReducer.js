import * as types from "../types";
const initialState = null;

export const productCategoryReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case types.PRODUCTCATEGORY:
      return {
        ...state,
        category: payload,
      };
    default:
      return state;
  }
};
