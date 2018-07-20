const defaultFolderState = [
  {
    folderName: "Movies"
  },
  {
    folderName: "All"
  },
  {
    folderName: "Courses"
  },
  {
    folderName: "Books"
  },
  {
    folderName: "Games"
  }
];
export default (state = defaultFolderState, action) => {
  switch (action.type) {
    case "ADD_FOLDER":
      return [...state, { folderName: action.folder }];
    default:
      return state;
  }
};
