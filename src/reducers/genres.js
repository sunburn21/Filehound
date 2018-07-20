export default (state = { genre: "" }, action) => {
  switch (action.type) {
    case "ADD GENRE":
      return {
        ...state,
        genre: action.genre
      };
    // case "REMOVE GENRE":
    //   const st = new Set(state);
    //   st.delete(action.i);
    //   return st;
    // case "CLEAR_GENRES":
    //   return new Set();
    default:
      return state;
  }
};
