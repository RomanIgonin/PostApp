import { createSlice, nanoid } from "@reduxjs/toolkit";
import { loadPosts } from "./action";
import axios from "axios";
import { IP_POSTS } from "../../../app/constants";

// const dataReactions = {
//   heart: 0,
//   smile: 0,
//   boom: 0,
//   poo: 0,
// };

type State = {
  posts: any[];
  isPostsLoading: boolean;
};

const initialState = {
  posts: [],
  isPostsLoading: false,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    PostAdded: {
      reducer(state, action) {
        state.posts.push(action.payload);
        axios.post(IP_POSTS, action.payload).then((response) => {
          console.log(response.data);
        });
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
    PostUpdated(state, action) {
      const { id, title, content } = action.payload;
      const existingPost = state.posts.find((post) => post.id === id);
      existingPost.title = title;
      existingPost.content = content;
    },
    reactionAdded(state, action) {
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
    });
    builder.addCase(loadPosts.rejected, (state: State) => {
      state.isPostsLoading = false;
    });
  },
});

export const selectAllPosts = (state) => state.posts.posts;
export const selectPostsLoad = (state) => state.posts.isPostsLoading;
export const selectPostById = (state, postId) =>
  state.posts.posts.find((post) => post.id === postId);

export const { PostAdded, PostUpdated, reactionAdded } = postsSlice.actions;
export default postsSlice.reducer;
