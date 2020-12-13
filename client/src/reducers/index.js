import { combineReducers } from "redux";
import articlesReducer from "./articlesReducer";
import articleReducer from "./articleReducer";

export default combineReducers({
  articles: articlesReducer,
  article: articleReducer,
});
