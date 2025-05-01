import joi from 'joi';
import { password } from './custom.validation.js';

const createUserSchema = {
  body: joi.object().keys({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.custom(password).required(),
  }),
};

export default { createUserSchema };
