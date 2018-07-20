import { createStore, combineReducers } from "redux";
import genres from "../reducers/genres";
import filters from "../reducers/filters";
import keywords from "../reducers/keywords";
import folders from "../reducers/folders";
import links from "../reducers/links";
export default () => {
  const store = createStore(
    combineReducers({
      genres: genres,
      links: links,
      filters: filters,
      keywords: keywords,
      folders: folders
    })
  );
  return store;
};
