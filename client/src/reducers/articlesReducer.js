import { CREATE, UPDATE, DELETE, FETCH_ALL } from "../constans/actionTypes";

const articlesReducer = (articles = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return [...action.payload.articles];
    case CREATE:
      return [...articles, action.payload];
    case DELETE:
      return articles.filter((article) => article._id !== action.payload);
    case UPDATE:
      return articles.map((article) =>
        article._id === action.payload._id ? action.payload : article
      );
    default:
      return articles;
  }
};

export default articlesReducer;
