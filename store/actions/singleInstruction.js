import * as types from "../types";

export const getSingleInstruction = (data) => async (dispatch) => {
  dispatch({
    type: types.SINGLEINSTRUCTION,
    payload: data,
  });
};
