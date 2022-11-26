import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { loadPosts } from "./action";
import { RootState } from "../../../core/Store";
import postsService from "../services/PostsService";

type State = {
  posts: any[];
  isPostsLoading: boolean;
  refreshPosts: boolean;
};

const initialState = {
  posts: [],
  isPostsLoading: false,
  refreshPosts: false,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    PostAdded: {
      reducer(state: State, action: PayloadAction<object>) {
        postsService
          .setPost(action.payload)
          .then((response) => response.data)
          .catch((error) => console.error("PostAdded: " + error));
        state.refreshPosts = !state.refreshPosts;
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            date: new Date().toISOString(),
            reactions: { heart: 0, smile: 0, boom: 0, poo: 0 },
            title,
            content,
            userId,
          },
        };
      },
    },
    postUpdated(state: State, action: PayloadAction<object>) {
      const post = action.payload;
      postsService
        .updatePost(post)
        .then((response) => response.data)
        .catch((error) => console.error("postUpdated: " + error));
      state.refreshPosts = !state.refreshPosts;
    },
    postDeleted(state: State, action: PayloadAction<string>) {
      const postId = action.payload;
      postsService
        .deletePost(postId)
        .then((response) => response.data)
        .catch((error) => console.error("postDeleted: " + error));
      state.refreshPosts = !state.refreshPosts;
    },
    reactionAdded(state: State, action: PayloadAction<any>) {
      const { postId, reactionsNew } = action.payload;
      postsService
        .updateReaction(postId, reactionsNew)
        .then((response) => response.data)
        .catch((error) => console.error("postUpdated: " + error));
      state.refreshPosts = !state.refreshPosts;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadPosts.pending, (state: State) => {
      state.isPostsLoading = true;
    });
    builder.addCase(loadPosts.fulfilled, (state: State, { payload }) => {
      state.posts = payload;
      state.isPostsLoading = false;
    });
    builder.addCase(loadPosts.rejected, (state: State) => {
      state.isPostsLoading = false;
    });
  },
});

export const selectAllPosts = (state: RootState) => state.posts.posts;
export const selectPostsLoad = (state: RootState) => state.posts.isPostsLoading;
export const selectPostById = (state: RootState, postId: String) =>
  state.posts.posts.find((post: any) => post.id === postId);
export const selectRefreshPosts = (state: RootState) =>
  state.posts.refreshPosts;

export const { PostAdded, postUpdated, reactionAdded, postDeleted } =
  postsSlice.actions;

export default postsSlice.reducer;
