import joi from 'joi';

const loginSchema = {
  body: joi.object().keys({
    email: joi.string().email().required(),
    password: joi.string().required(),
  }),
};
const refreshTokenSchema = {
  body: joi.object().keys({
    refreshToken: joi.string().required(),
  }),
};

export default { loginSchema, refreshTokenSchema };
