import * as types from "../types";
const initialState = null;

export const favoriteLengthReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case types.FAVORITELENGTH:
      return {
        ...state,
        favoriteLength: payload,
      };
    default:
      return state;
  }
};
