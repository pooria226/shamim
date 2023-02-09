import * as types from "../types";
const initialState = { sidebar: false };

export const sidebarReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.OPEN_SIDEBAR:
      return {
        ...state,
        sidebar: true,
      };
    case types.CLOSE_SIDEBAR:
      return {
        ...state,
        sidebar: false,
      };
    default:
      return state;
  }
};
