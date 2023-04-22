import API from "../utils/request";

export const createNote = (body) => {
  return API.post(`notes`, body);
};

export const getNote = (id) => {
  return API.get(`notes/user/${id}`);
};
