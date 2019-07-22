import axios from "axios";

const BASE_URL = "https://ncnews-round.herokuapp.com/api";

export const getArticles = async ({ sort_by, topic, order, author, limit }) => {
  const { data } = await axios.get(`${BASE_URL}/articles`, {
    params: { sort_by, topic, order, author, limit }
  });
  return data.articles;
};

export const getArticleById = async article_id => {
  const { data } = await axios.get(`${BASE_URL}/articles/${article_id}`);
  return data.article;
};

export const getCommentsByArticle = async article_id => {
  const { data } = await axios.get(
    `${BASE_URL}/articles/${article_id}/comments`
  );
  return data.comments;
};
