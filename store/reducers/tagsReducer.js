import * as types from "../types";
const initialState = null;

export const tagsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.TAGS:
      return {
        ...state,
        tags: payload,
      };
    default:
      return state;
  }
};
