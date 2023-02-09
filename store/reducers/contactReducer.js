import * as types from "../types";
const initialState = null;

export const contactReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.CONTACT:
      return {
        ...state,
        contact: payload,
      };
    default:
      return state;
  }
};
