import API from "../utils/request";

export const registerUser = (body) => {
  return API.post(`user/register`, body);
};

export const checkEmail = (body) => {
  return API.post(`user/checkmail`, body);
};

export const loginUser = (body) => {
  return API.post(`user/login`, body);
};

export const updateUser = (id, body) => {
  return API.patch(`user/${id}`, body);
}