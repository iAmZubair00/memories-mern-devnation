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
router.put("/", editPost);
router.post("/", createPost);
router.delete("/:id", deletePost);

export default router;
