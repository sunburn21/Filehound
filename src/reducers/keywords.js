const defaultKeywordState = [];

export default (state = defaultKeywordState, action) => {
  switch (action.type) {
    case "ADD_KEYWORD":
      return [...state, action.keyword];
    default:
      return state;
  }
};
