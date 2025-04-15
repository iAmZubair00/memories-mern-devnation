import express from "express";
import postController from "../controllers/post.controller.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.get(
  "/",
  auth,
  postController.getPosts
);
router.put(
  "/",
  auth, 
  postController.editPost
);
router.post(
  "/", 
  auth, 
  postController.createPost
);
router.delete(
  "/:id", 
  auth, 
  postController.deletePost
);

export default router;
