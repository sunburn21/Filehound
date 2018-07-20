export const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});

export const setFolderFilter = (folder = "") => ({
  type: "SET_FOLDER_FILTER",
  folder
});
