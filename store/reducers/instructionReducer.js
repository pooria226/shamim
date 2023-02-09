import * as types from "../types";
const initialState = null;

export const instructionReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.INSTRUCTION:
      return {
        ...state,
        instruction: payload,
      };
    default:
      return state;
  }
};
