import { createAsyncThunk } from "@reduxjs/toolkit";
import postsService from "../services/PostsService";
import { Post, editPost, newReaction } from "./index";

const PREFIX = "posts";

export const getPosts = createAsyncThunk<Post[], undefined>(
  `${PREFIX}/loadPosts`,
  async () => {
    return await postsService.getPostService();
  }
);

export const setPost = createAsyncThunk<undefined, Post>(
  `${PREFIX}/setPost`,
  async (post) => {
    return await postsService.setPostService(post);
  }
);

export const deletePost = createAsyncThunk<undefined, string>(
  `${PREFIX}/deletePost`,
  async (postId) => {
    return await postsService.deletePostService(postId);
  }
);

export const patchPost = createAsyncThunk<undefined, editPost>(
  `${PREFIX}/patchPost`,
  async (editPost) => {
    return await postsService.patchPostService(editPost);
  }
);

export const patchReaction = createAsyncThunk<undefined, newReaction>(
  `${PREFIX}/patchReaction`,
  async (newReaction) => {
    return await postsService.patchReactionService(newReaction);
  }
);
