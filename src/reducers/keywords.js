const defaultKeywordState = [];

export default (state = defaultKeywordState, action) => {
  switch (action.type) {
    case "ADD_KEYWORD":
      return [...state, action.keyword];
    case "SET_KEYWORDS":
      return [...action.keywords];
    case "EDIT_KEYWORD":
      return state.map(kw => {
        if (kw.id === action.id) {
          console.log(kw);
          return {
            ...kw,
            count: kw.count + 1
          };
        } else {
          return kw;
        }
      });
    default:
      return state;
  }
};
