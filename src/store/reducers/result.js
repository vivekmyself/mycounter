import * as actionType from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  results: []
};

const deleteResultItem = (state, action) => {
  const updatedArray = state.results.filter(
    result => result.id !== action.resultElid
  );
  return updateObject(state, { results: updatedArray });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.STORE_RESULT:
      return updateObject(state, {
        results: state.results.concat({ id: new Date(), value: action.result })
      });
    /* return {
        ...state,
        results: state.results.concat({ id: new Date(), value: action.result })
      }; */
    case actionType.DELETE_RESULT_ITEM:
      return deleteResultItem(state, action);
    /* return {
        ...state,
        results: updatedArray
      }; */
  }
  return state;
};

export default reducer;
