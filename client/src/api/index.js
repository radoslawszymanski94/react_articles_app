import axios from "axios";
import { message } from "antd";

// Base URL
const url = "https://articles-application.herokuapp.com/articles";

// Fetch all articles
export const fetchArticles = () => axios.get(url);

// Get specific article
export const getArticle = (id) => axios.get(`${url}/${id}`);

// Create article
export const createArticle = (newArticle) =>
  axios
    .post(`${url}/create`, newArticle)
    .then(() => message.success("Article created successfully!"))
    .catch(() => message.error("Article is not created..."));

// Delete article
export const deleteArticle = (id) => axios.delete(`${url}/${id}`);

export const updateArticle = (id, updatedArticle) =>
  axios
    .patch(`${url}/edit/${id}`, updatedArticle)
    .then(() => message.success("Article updated successfully!"))
    .catch(() => message.error("Article is not updated..."));
