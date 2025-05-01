import axios from "axios";
import { axiosPrivate } from "./axios";

const baseURL = process.env.REACT_APP_API_URL;

export const fetchPosts = async () => {
  const data = await axiosPrivate.get('/post');
  return data;
};

export const createPost = async (newPost) => {
  const data = await axiosPrivate.post('/post', newPost);
  return data;
};

export const editPost = async (updatedPost) => {
  const data = await axiosPrivate.put('/post', updatedPost);
  return data;
};

export const deletePost = async (id) => {
  const data = await axiosPrivate.delete(`/post/${id}`);
  return data;
};

export const signUp = async (user) => {
  const data = await axios.post(`${baseURL}/auth/register`, user);
  return data;
};

export const login = async (user) => {
  const data = await axios.post(`${baseURL}/auth/login`, user);
  return data;
};
