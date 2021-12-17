import mongoose from "mongoose";
import PostModel from "../models/post.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await PostModel.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const createPost = async (req, res) => {
  const postBody = req.body;
  //console.log(postBody);
  const newPostImage = new PostModel(postBody);

  try {
    await newPostImage.save();
    res.status(200).json(newPostImage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const editPost = async (req, res) => {
  const reqBody = req.body;
  try {
    const post = await PostModel.findOneAndUpdate(
      { _id: reqBody._id },
      reqBody,
      { new: true }
    );
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const deletePost = async (req, res) => {
  let id = req.params.id;
  try {
    const data = await PostModel.findByIdAndRemove(id);
    res.status(200).json(data);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
