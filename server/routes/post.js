import express from "express";

const router = express.Router();
import {
  getPosts,
  createPost,
  editPost,
  deletePost,
} from "../controllers/post.js";

import auth from "../middlewares/auth.js";

router.get("/", auth, getPosts);
router.put("/", auth, editPost);
router.post("/", auth, createPost);
router.delete("/:id", auth, deletePost);

export default router;
