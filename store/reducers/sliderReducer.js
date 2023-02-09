import * as types from "../types";
const initialState = null;

export const sliderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SLIDER:
      return {
        ...state,
        sliders: payload,
      };
    default:
      return state;
  }
};
