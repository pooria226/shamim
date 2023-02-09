import * as types from "../types";
const initialState = null;

export const teamReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.TEAM:
      return {
        ...state,
        team: payload,
      };
    default:
      return state;
  }
};
