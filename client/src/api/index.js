import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;

export const fetchPosts = async () => {
  const data = await axios.get(`${baseURL}/posts`);
  return data;
};

export const createPost = async (newPost) => {
  const data = await axios.post(`${baseURL}/posts`, newPost);
  return data;
};

export const editPost = async (updatedPost) => {
  const data = await axios.put(`${baseURL}/posts`, updatedPost);
  return data;
};

export const deletePost = async (id) => {
  const data = await axios.delete(`${baseURL}/posts/${id}`);
  return data;
};
