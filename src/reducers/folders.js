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
      return [...state, action.folder];
    case "SET_FOLDERS":
      return [...defaultFolderState, ...action.folders];
    default:
      return state;
  }
};
