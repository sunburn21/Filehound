import database from "../firebase/firebase";

export const addLink = link => ({
  type: "ADD LINK",
  link
});
export const setLinks = links => ({
  type: "SET_LINKS",
  links
});
export const startAddLink = (linkData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    database
      .ref(`/users/${uid}/links`)
      .push(linkData)
      .then(ref => {
        dispatch(
          addLink({
            ...linkData,
            id: ref.key
          })
        );
      });
  };
};
export const startSetLinks = (links = []) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    console.log(uid);
    return database
      .ref(`/users/${uid}/links`)
      .once("value")
      .then(snapshot => {
        const links = [];
        snapshot.forEach(link => {
          const obj = { ...link.val(), id: link.key };
          links.push(obj);
        });
        dispatch(setLinks(links));
      });
  };
};
export const removeLink = id => ({
  type: "REMOVE LINK",
  id
});
