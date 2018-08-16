import * as actionType from "./actionTypes";

export const saveResult = result => {
  return {
    type: actionType.STORE_RESULT,
    result
  };
};

export const storeResult = result => {
  return dispatch => {
    setTimeout(() => {
      // const oldCounter = getState().ctr.counter;
      // console.log("[Old Counter] : ", oldCounter);
      dispatch(saveResult(result));
    }, 2000);
  };
};

export const deleteResultItem = resId => {
  return {
    type: actionType.DELETE_RESULT_ITEM,
    resultElid: resId
  };
};
