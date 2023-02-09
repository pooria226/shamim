import * as types from "../types";
const initialState = null;

export const addressReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADDRESS:
      return {
        ...state,
        address: payload,
      };
    default:
      return state;
  }
};
