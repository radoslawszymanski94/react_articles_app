import {
  CREATE,
  UPDATE,
  DELETE,
  FETCH_ALL,
  FETCH_ONE,
  CLEAR,
} from "../constans/actionTypes";
import * as api from "../api";

// Action creators
export const getArticles = () => async (dispatch) => {
  try {
    const allArticles = await api.fetchArticles();
    dispatch({
      type: FETCH_ALL,
      payload: {
        articles: allArticles.data,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const getArticle = (id) => async (dispatch) => {
  try {
    const { data } = await api.getArticle(id);
    dispatch({
      type: FETCH_ONE,
      payload: {
        article: data,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const clearArticle = () => async (dispatch) => {
  dispatch({
    type: CLEAR,
    payload: {
      article: [],
    },
  });
};

export const createArticle = (article) => async (dispatch) => {
  try {
    const { data } = await api.createArticle(article);
    dispatch({
      type: CREATE,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteArticle = (id) => async (dispatch) => {
  try {
    await api.deleteArticle(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const updateArticle = (id, article) => async (dispatch) => {
  try {
    const { data } = await api.updateArticle(id, article);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
