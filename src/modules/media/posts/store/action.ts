import { createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import postsService from "../services/PostsService";
import { Post, PostsState } from "./index";

const PREFIX = "posts";

export const getPosts = createAsyncThunk<Post, undefined>(
  `${PREFIX}/loadPosts`,
  async () => {
    return await postsService.getPostService();
  }
);

export const setPost = createAsyncThunk<Post, Post>(
  `${PREFIX}/setPost`,
  async (post) => {
    return await postsService.setPostService(post);
  }
);
