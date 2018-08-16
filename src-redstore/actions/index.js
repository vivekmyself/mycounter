export function movieList() {
  return {
    type: "MOVIELIST",
    payload: [
      { id: "1", name: "Pulp Fiction" },
      { id: "2", name: "The Usual Suspect" },
      { id: "3", name: "Oceans 11" },
      { id: "4", name: "Devar Magan" }
    ]
  };
}
