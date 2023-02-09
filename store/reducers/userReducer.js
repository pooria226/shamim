import * as types from "../types";
const initialState = null;

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.USER:
      return {
        ...state,
        users: payload,
      };
    default:
      return state;
  }
};
