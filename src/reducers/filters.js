const defaultFiltersState = {
  text: "",
  folder: "All"
};

export default (state = defaultFiltersState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text
      };
    case "SET_FOLDER_FILTER":
      return {
        ...state,
        folder: action.folder
      };
    default:
      return state;
  }
};
