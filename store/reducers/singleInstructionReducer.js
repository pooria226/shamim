import * as types from "../types";
const initialState = null;

export const singleInstructionReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case types.SINGLEINSTRUCTION:
      return {
        ...state,
        instruction: payload,
      };
    default:
      return state;
  }
};
