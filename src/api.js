import axios from "axios";

const BASE_URL = "https://ncnews-round.herokuapp.com/api";

export const getArticles = async () => {
  const { data } = await axios.get(`${BASE_URL}/articles`);
  return data.articles;
};
