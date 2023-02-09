import * as types from "../types";

export const getTeam = (data) => async (dispatch) => {
  dispatch({
    type: types.TEAM,
    payload: data,
  });
};
