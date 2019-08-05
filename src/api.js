import axios from "axios";

const BASE_URL = "https://ncnews-round.herokuapp.com/api";

export const getArticles = async ({ sort_by, topic, order, author }) => {
  const { data } = await axios.get(`${BASE_URL}/articles`, {
    params: { sort_by, topic, order, author }
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

export const postCommentToArticle = async ({
  article_id,
  loggedInAs,
  newComment
}) => {
  const { data } = await axios.post(
    `${BASE_URL}/articles/${article_id}/comments`,
    { author: loggedInAs, body: newComment }
  );
  return data.comment;
};

export const deleteCommentById = async comment_id => {
  return axios.delete(`${BASE_URL}/comments/${comment_id}`);
};
