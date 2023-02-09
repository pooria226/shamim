import * as types from "../types";

export const getInstruction = (data) => async (dispatch) => {
  dispatch({
    type: types.INSTRUCTION,
    payload: data,
  });
};
