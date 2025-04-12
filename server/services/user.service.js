import { User } from './../models/index.js';
//const ApiError = require('./../utils/ApiError');
import ApiError from './../utils/ApiError.js';
import httpStatus from 'http-status';

const createUser = async (userBody) => {
  // check if email exists
  if (await User.isEmailTaken(userBody.email)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email is already taken');
  }
  const user = await User.create(userBody);
  return user;
};

const getUserByEmail = async (email) => {
  return await User.findOne({ email });
};

const getUserById = async (id) => {
  return await User.findById(id);
};
export default { createUser, getUserByEmail, getUserById };
