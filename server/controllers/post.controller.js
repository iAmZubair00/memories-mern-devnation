import { postService } from './../services/index.js';

const getPosts = async (req, res) => {
  try {
    const posts = await postService.getPosts();
    res.status(200).json(posts);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const createPost = async (req, res) => {
  try {
    const newPost = await postService.createPost(req.body);
    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const editPost = async (req, res) => {
  try {
    const post = await postService.editPost(req.body);
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const deletePost = async (req, res) => {
  let id = req.params.id;
  try {
    const data = postService.deletePost(id);
    res.status(200).json(data);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export default { getPosts, createPost, editPost, deletePost };
