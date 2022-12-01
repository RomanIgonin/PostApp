import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  deletePost,
  getPosts,
  patchPost,
  patchReaction,
  setPost,
} from "./action";

export type newReaction = {
  postId: string;
  reactionsNew: Reactions;
};

export interface editPost {
  postId: string;
  title: string;
  content: string;
}

interface Reactions {
  heart: number;
  smile: number;
  boom: number;
  poo: number;
}

export type Post = {
  id: string;
  date: string;
  reactions: Reactions;
  title: string;
  content: string;
  userId: number;
};

export type PostsState = {
  posts: Post[];
  selectedPost: null | Post;
  isPostsLoading: boolean;
  refreshPosts: boolean;
};

const initialState: PostsState = {
  posts: [],
  selectedPost: null,
  isPostsLoading: false,
  refreshPosts: false,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // тут прописываешь редусером если в селектор нуно передать экшн
    setSelectedPost: (state: PostsState, { payload }) => {
      state.selectedPost = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state) => {
      state.isPostsLoading = true;
    });
    builder.addCase(getPosts.fulfilled, (state, { payload }) => {
      state.posts = payload;
      state.isPostsLoading = false;
    });
    // builder.addCase(getPosts.rejected, (state) => {
    //   state.isPostsLoading = false;
    // });
    builder.addCase(setPost.fulfilled, (state) => {
      state.refreshPosts = !state.refreshPosts;
    });
    builder.addCase(deletePost.fulfilled, (state) => {
      state.refreshPosts = !state.refreshPosts;
    });
    builder.addCase(patchPost.fulfilled, (state) => {
      state.refreshPosts = !state.refreshPosts;
    });
    builder.addCase(patchReaction.fulfilled, (state) => {
      state.refreshPosts = !state.refreshPosts;
    });
    builder.addMatcher(isError, (state, action: PayloadAction<string>) => {
      console.log(action.payload);
    });
  },
});

export default postsSlice.reducer;
export const postsActions = postsSlice.actions;

function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}
