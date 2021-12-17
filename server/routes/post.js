import express from "express";

const router = express.Router();
import {
  getPosts,
  createPost,
  editPost,
  deletePost,
} from "../controllers/post.js";

router.get("/", getPosts);
router.put("/", editPost);
router.post("/", createPost);
router.delete("/:id", deletePost);

export default router;
