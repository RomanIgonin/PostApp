import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import axios from "axios";

const dataReactions = {
  heart: 0,
  smile: 0,
  boom: 0,
  poo: 0,
};

const initialState = {
  data: [],
  status: "idle",
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get("http://localhost:3001/posts");
  return response.data;
});

// const initialState = [
//     {
//         id: 111022,
//         date: '2022-10-28T14:48:00.000Z',
//         reactions: dataReactions,
//         title: 'SafeAreaView',
//         content: '  The purpose of SafeAreaView is to render content within the safe area boundaries of a device. It is currently only applicable to iOS devices with iOS version 11 or later.\n' +
//             '\n' +
//             '   SafeAreaView renders nested content and automatically applies padding to reflect the portion of the view that is not covered by navigation bars, tab bars, toolbars, and other ancestor views. Moreover, and most importantly, Safe Area\'s paddings reflect the physical limitation of the screen, such as rounded corners or camera notches (i.e. the sensor housing area on iPhone 13).',
//         userId: 3
//     },
//     {
//         id: 211022,
//         date: '2022-10-29T19:18:00.000Z',
//         reactions: dataReactions,
//         title: 'Flat List',
//         content: '  A performant interface for rendering basic, flat lists, supporting the most handy features:\n' +
//             '\n' +
//             '- Fully cross-platform.\n' +
//             '- Optional horizontal mode.\n' +
//             '- Configurable viewability callbacks.\n' +
//             '- Header support.\n' +
//             '- Footer support.\n' +
//             '- Separator support.\n' +
//             '- Pull to Refresh.\n' +
//             '- Scroll loading.\n' +
//             '- ScrollToIndex support.\n' +
//             '- Multiple column support.\n' +
//             '\n' +
//             '    If you need section support, use <SectionList>.',
//         userId: 4
//     },
// ]

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    PostAdded: {
      reducer(state, action) {
        state.data.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            date: new Date().toISOString(),
            reactions: dataReactions,
            title,
            content,
            userId,
          },
        };
      },
    },
    PostUpdated(state, action) {
      const { id, title, content } = action.payload;
      const existingPost = state.data.find((post) => post.id === id);
      existingPost.title = title;
      existingPost.content = content;
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.data.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
});
export const selectAllPosts = (state) => state.posts.data;
export const selectPostById = (state, postId) =>
  state.posts.data.find((post) => post.id === postId);

// export const getPosts = () => {
//     const buff = AxiosGetPosts()
//     initialState.data = buff
// }

export const { PostAdded, PostUpdated, reactionAdded } = postSlice.actions;
export default postSlice.reducer;
