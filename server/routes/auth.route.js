import express from 'express';
import validate from '../middlewares/validate.js';
import { userValidation, authValidation } from '../validations/index.js';
import authController from '../controllers/auth.controller.js';

const router = express.Router();

router.post(
  '/auth/register',
  validate(userValidation.createUserSchema),
  authController.register
);

router.post(
  '/auth/login',
  validate(authValidation.loginSchema),
  authController.login
);

router.post(
  '/auth/refresh-token',
  validate(authValidation.refreshTokenSchema),
  authController.refreshToken
);

export default router;
