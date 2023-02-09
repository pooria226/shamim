import * as types from "../types";
const initialState = null;

export const faqReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FAQ:
      return {
        ...state,
        faq: payload,
      };
    default:
      return state;
  }
};
