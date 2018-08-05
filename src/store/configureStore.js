import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import genres from "../reducers/genres";
import filters from "../reducers/filters";
import keywords from "../reducers/keywords";
import folders from "../reducers/folders";
import links from "../reducers/links";
import auth from "../reducers/auth";
import user from "../reducers/user";
const composeEnhancers = compose;
export default () => {
  const store = createStore(
    combineReducers({
      genres: genres,
      links: links,
      filters: filters,
      keywords: keywords,
      folders: folders,
      auth: auth,
      user: user
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
