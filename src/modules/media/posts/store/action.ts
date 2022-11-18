import { createAsyncThunk } from "@reduxjs/toolkit";
import postsService from "../services/PostsService";

const PREFIX = "posts";

export const loadPosts = createAsyncThunk(`${PREFIX}/loadPosts`, async () => {
    return await postsService.getPosts();
});