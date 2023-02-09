import * as types from "../types";
const initialState = null;

export const userBlogerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.USER_BLOGER:
      return {
        ...state,
        users: payload,
      };
    default:
      return state;
  }
};
