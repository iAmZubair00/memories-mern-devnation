import { Post } from "../models/index.js";

const createPost = async (body) => {
  const newPostImage = new Post(body);
  await newPostImage.save();
  return newPostImage;
};

const editPost = async (body) => {
  const post = await Post.findOneAndUpdate(
    { _id: body._id },
    body,
    { new: true }
  );
  return post;
};

const deletePost = async (id) => {
  const post = await Post.findByIdAndRemove(id);
  return post;
};

const getPosts = async () => {
  const blogs = await Post.find();
  return blogs;
};

export default {
  createPost,
  editPost,
  deletePost,
  getPosts,
};
