import * as types from "../types";
const initialState = null;

export const favoriteReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FAVORITE:
      return {
        ...state,
        favorite: payload,
      };
    default:
      return state;
  }
};
