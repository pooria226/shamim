import * as types from "../types";
const initialState = null;

export const homeSliderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.HOME_SLIDER:
      return {
        ...state,
        slider: payload,
      };
    default:
      return state;
  }
};
