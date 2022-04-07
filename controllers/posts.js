import ErrorResponse from '../utils/ErrorResponse.js';

export const getAllPosts = async (req, res, next) => {
  try {
    throw new ErrorResponse('YOU SHALL NOT PASS!', 403);
  } catch (error) {
    next(error);
  }
};

export const createPost = async (req, res) => res.send('POST');

export const getSinglePost = async (req, res) => res.send('GET single');

export const updatePost = async (req, res) => res.send('PUT');

export const deletePost = async (req, res) => res.send('DELETE');
