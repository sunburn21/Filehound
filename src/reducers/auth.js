const defaultState = {};
export default (state = defaultState, action) => {
  switch (action.type) {
    case "LOGIN":
      // console.log(action.uid);
      return {
        uid: action.uid
      };
    case "LOGOUT":
      return {};
    default:
      return state;
  }
};
