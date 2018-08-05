import database from "../firebase/firebase";
export const addKeyword = keyword => ({
  type: "ADD_KEYWORD",
  keyword
});

export const editKeyword = id => ({
  type: "EDIT_KEYWORD",
  id
});
export const setKeywords = keywords => ({
  type: "SET_KEYWORDS",
  keywords
});

export const startAddKeyword = (keyword = {}) => {
  return (dispatch, getState) => {
    database
      .ref("keywords")
      .push(keyword)
      .then(snapshot => {
        dispatch(
          addKeyword({
            ...keyword,
            id: snapshot.key
          })
        );
      });
  };
};
export const startEditKeyword = (eid, count) => {
  return dispatch => {
    database
      .ref(`keywords/${eid}`)
      .update({
        count: count
      })
      .then(obj => {
        dispatch(editKeyword(eid));
      });
  };
};
export const startSetKeywords = () => {
  return dispatch => {
    let keywords = [];
    database
      .ref("keywords")
      .once("value")
      .then(snapshot => {
        snapshot.forEach(keyword => {
          keywords.push({
            ...keyword.val(),
            id: keyword.key
          });
        });
        dispatch(setKeywords(keywords));
      });
  };
};
