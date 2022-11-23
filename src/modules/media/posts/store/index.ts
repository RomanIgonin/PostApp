import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { postPost, loadPosts } from "./action";
import axios from "axios";
import { IP_POSTS } from "../../../app/constants";
import { RootState } from "../../../app/Store";
import postService from "../services/PostsService";
import postsService from "../services/PostsService";

// const dataReactions = {
//   heart: 0,
//   smile: 0,
//   boom: 0,
//   poo: 0,
// };

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
          .catch((error) => console.error("3_WWW: " + error));
        // postPost(action.payload);
        // useEffect in PostsList will loadPosts when refreshPost switch on true
        state.refreshPosts = !state.refreshPosts;
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            date: new Date().toISOString(),
            // reactions: dataReactions,
            reactions: { heart: 0, smile: 0, boom: 0, poo: 0 },
            title,
            content,
            userId,
          },
        };
      },
    },
    PostUpdated(state: State, action) {
      const { id, title, content } = action.payload;
      const existingPost = state.posts.find((post) => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    },
    // PostUpdated(state, action) {
    //   const { id, title, content } = action.payload;
    //   const existingPost = state.posts.find((post) => post.id === id);
    //   if (existingPost) {
    //     existingPost.title = title;
    //     existingPost.content = content;
    //   }
    // },
    postDeleted(state: State, action) {
      const postId = action.payload;
      console.log("8_WWW: " + postId);
      postsService
        .deletePost(postId)
        .then(() => (state.refreshPosts = !state.refreshPosts))
        .catch((error) => console.error("4_WWW: " + error));
      // state.posts.filter((post) => post.id !== action.payload.id);
    },
    reactionAdded(state, action) {
      // add reaction in state, but not add in server
      const { postId, reaction } = action.payload;
      const existingPost = state.posts.find((post) => post.id === postId);
      console.log(existingPost);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadPosts.pending, (state: State) => {
      state.isPostsLoading = true;
    });
    builder.addCase(loadPosts.fulfilled, (state: State, { payload }) => {
      state.posts = payload;
      state.isPostsLoading = false;
      // state.refreshPosts = false;
    });
    builder.addCase(loadPosts.rejected, (state: State) => {
      state.isPostsLoading = false;
    });
    // builder.addCase(postPost.pending, (state: State) => {
    //
    // });
    // builder.addCase(postPost.fulfilled, (state: State, { payload }) => {
    //
    // });
  },
});

export const selectAllPosts = (state: RootState) => state.posts.posts;
export const selectPostsLoad = (state: RootState) => state.posts.isPostsLoading;
export const selectPostById = (state: RootState, postId: Number) =>
  state.posts.posts.find((post) => post.id === postId);
export const selectRefreshPosts = (state: RootState) =>
  state.posts.refreshPosts;

export const { PostAdded, PostUpdated, reactionAdded, postDeleted } =
  postsSlice.actions;
export default postsSlice.reducer;
