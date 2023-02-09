import * as types from "../types";
const initialState = null;

export const blogCategoryReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case types.BLOGCATEGORY:
      return {
        ...state,
        category: payload,
      };
    default:
      return state;
  }
};
