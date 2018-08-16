import * as actionType from "./actions";

const initialState = {
  counter: 0,
  results: []
};

const reducer = (state = initialState, action) => {
  /* if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1
    };
  }
  if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 1
    };
  }
  if (action.type === "ADD") {
    return {
      counter: state.counter + action.value
    };
  }
  if (action.type === "SUBTRACT") {
    return {
      counter: state.counter - action.value
    };
  } */
  switch (action.type) {
    case actionType.INCREMENT:
      const newState = Object.assign({}, state);
      newState.counter = state.counter + 1;
      return newState;
    case actionType.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      };
    case actionType.ADD:
      return {
        ...state,
        counter: state.counter + action.value
      };
    case actionType.SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.value
      };
    case actionType.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: state.counter })
      };
    case actionType.DELETE_RESULT_ITEM:
      const updatedArray = state.results.filter(
        result => result.id !== action.resultElid
      );
      return {
        ...state,
        results: updatedArray
      };
  }
  return state;
};

export default reducer;
