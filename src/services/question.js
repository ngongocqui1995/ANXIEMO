import API from "../utils/request";

export const createQuestion = (body) => {
  return API.post(`questions`, body);
};

export const getQuestion = (id) => {
  return API.get(`questions/user/${id}`);
};
