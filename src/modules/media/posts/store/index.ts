import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { getPosts, setPost } from "./action";
import { RootState } from "../../../core/Store";
import postsService from "../services/PostsService";

interface Reactions {
  heart: number;
  smile: number;
  boom: number;
  poo: number;
}

// interface Post {
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
    // PostAdded: {
    //   reducer(state: PostsState, action) {
    //     postsService
    //       .setPost(payload)
    //       .then((response) => response.data)
    //       .catch((error) => console.error("PostAdded: " + error));
    //     state.refreshPosts = !state.refreshPosts;
    //   },
    //   prepare(title, content, userId) {
    //     return {
    //       payload: {
    //         id: nanoid(),
    //         date: new Date().toISOString(),
    //         reactions: { heart: 0, smile: 0, boom: 0, poo: 0 },
    //         title,
    //         content,
    //         userId,
    //       },
    //     };
    //   },
    // },
    // postUpdated(state: State, action: PayloadAction<object>) {
    //   const post = action.payload;
    //   postsService
    //     .updatePost(post)
    //     .then((response) => response.data)
    //     .catch((error) => console.error("postUpdated: " + error));
    //   state.refreshPosts = !state.refreshPosts;
    // },
    // postDeleted(state: State, action: PayloadAction<string>) {
    //   const postId = action.payload;
    //   postsService
    //     .deletePost(postId)
    //     .then((response) => response.data)
    //     .catch((error) => console.error("postDeleted: " + error));
    //   state.refreshPosts = !state.refreshPosts;
    // },
    // reactionAdded(state: State, action: PayloadAction<any>) {
    //   const { postId, reactionsNew } = action.payload;
    //   postsService
    //     .updateReaction(postId, reactionsNew)
    //     .then((response) => response.data)
    //     .catch((error) => console.error("postUpdated: " + error));
    //   state.refreshPosts = !state.refreshPosts;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state) => {
      state.isPostsLoading = true;
    });
    builder.addCase(getPosts.fulfilled, (state, { payload }) => {
      state.posts = payload;
      state.isPostsLoading = false;
    });
    builder.addCase(getPosts.rejected, (state) => {
      state.isPostsLoading = false;
    });
    builder.addCase(setPost.fulfilled, (state) => {
      state.refreshPosts = !state.refreshPosts;
    });
  },
});

export default postsSlice.reducer;
export const postsActions = postsSlice.actions;
// export default postsSlice;
