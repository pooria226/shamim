import * as types from "../types";
const initialState = null;

export const currentUser = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      return state;
  }
};
