import * as types from "../types";
const initialState = null;

export const statusOrderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.STATUSORDER:
      return {
        ...state,
        orders: payload,
      };
    default:
      return state;
  }
};
