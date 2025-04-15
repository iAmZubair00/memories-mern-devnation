import { Post } from "../models/index.js";

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const createPost = async (req, res) => {
  const postBody = req.body;
  //console.log(postBody);
  const newPostImage = new Post(postBody);

  try {
    await newPostImage.save();
    res.status(200).json(newPostImage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const editPost = async (req, res) => {
  const reqBody = req.body;
  try {
    const post = await Post.findOneAndUpdate(
      { _id: reqBody._id },
      reqBody,
      { new: true }
    );
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const deletePost = async (req, res) => {
  let id = req.params.id;
  try {
    const data = await Post.findByIdAndRemove(id);
    res.status(200).json(data);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export default { getPosts, createPost, editPost, deletePost };
