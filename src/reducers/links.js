const defaultLinksState = [];
export default (state = defaultLinksState, action) => {
  switch (action.type) {
    case "ADD LINK":
      return [...state, action.link];
    case "SET_LINKS":
      return [...action.links];
    case "REMOVE LINK":
      return state;
    default:
      return state;
  }
};
