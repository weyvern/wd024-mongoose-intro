import asyncHandler from '../utils/asyncHandler.js';
import ErrorResponse from '../utils/ErrorResponse.js';
import Post from '../models/Post.js';

export const getAllPosts = asyncHandler(async (req, res, next) => {
  const posts = await Post.find();
  res.json(posts);
});

export const createPost = asyncHandler(async (req, res) => {
  const { body } = req;
  const newPost = await Post.create(body);
  res.status(201).json(newPost);
});

export const getSinglePost = asyncHandler(async (req, res) => res.send('GET single'));

export const updatePost = asyncHandler(async (req, res) => res.send('PUT'));

export const deletePost = asyncHandler(async (req, res) => res.send('DELETE'));
