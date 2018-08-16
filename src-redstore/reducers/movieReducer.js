//01 Action
/* const action = {
  type: "MOVIELIST",
  payload: [
    { id: "1", name: "Pulp Fiction" },
    { id: "2", name: "The Usual Suspect" }
  ]
};
 */
//02 Reducers

export default function(state = {}, action) {
  switch (action.type) {
    case "MOVIELIST":
      return {
        ...state,
        movies: action.payload
      };

    default:
      return state;
  }
}
