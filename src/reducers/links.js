const defaultLinksState = [];
export default (state = defaultLinksState, action) => {
  switch (action.type) {
    case "ADD LINK":
      return [...state, action.link];
    case "REMOVE LINK":
      return state;
    default:
      return state;
  }
};
