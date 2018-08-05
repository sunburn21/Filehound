import database from "../firebase/firebase";
export const addFolder = folder => ({
  type: "ADD_FOLDER",
  folder
});
export const startAddFolder = folderData => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    database
      .ref(`/users/${uid}/folders`)
      .push(folderData)
      .then(ref => dispatch(addFolder({ ...folderData, id: ref.id })));
  };
};

export const setFolders = folders => {
  return {
    type: "SET_FOLDERS",
    folders
  };
};

export const startSetFolders = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const folders = [];
    database
      .ref(`/users/${uid}/folders`)
      .once("value")
      .then(snapshot => {
        snapshot.forEach(folder => {
          folders.push({ ...folder.val(), id: folder.key });
        });
        dispatch(setFolders(folders));
      });
  };
};
