import { FETCH_ONE, CLEAR } from "../constans/actionTypes";

const articleReducer = (article = [], action) => {
  switch (action.type) {
    case FETCH_ONE:
      return action.payload.article;
    case CLEAR:
      return action.payload.article;
    default:
      return article;
  }
};

export default articleReducer;
