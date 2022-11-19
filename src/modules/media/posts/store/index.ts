import { createSlice, nanoid } from "@reduxjs/toolkit";
import { loadPosts } from './action'

const dataReactions = {
    heart: 0,
    smile: 0,
    boom: 0,
    poo: 0,
};

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
        // PostAdded: {
        //     reducer(state, action) {
        //         state.posts.push(action.payload);
        //     },
        //     prepare(title, content, userId) {
        //         return {
        //             payload: {
        //                 id: nanoid(),
        //                 date: new Date().toISOString(),
        //                 reactions: dataReactions,
        //                 title,
        //                 content,
        //                 userId,
        //             },
        //         };
        //     },
        // },
        // PostUpdated(state, action) {
        //     const { id, title, content } = action.payload;
        //     const existingPost = state.posts.find((post) => post.id === id);
        //     existingPost.title = title;
        //     existingPost.content = content;
        // },
        // reactionAdded(state, action) {
        //     const { postId, reaction } = action.payload;
        //     const existingPost = state.posts.find((post) => post.id === postId);
        //     if (existingPost) {
        //         existingPost.reactions[reaction]++;
        //     }
        // },
    },
    extraReducers: (builder) => {
        builder.addCase(loadPosts.pending, (state: State) => {
            state.isPostsLoading = true;
        });
        builder.addCase(loadPosts.fulfilled, (state: State, { payload }) => {
            state.posts = payload;
            state.isPostsLoading = false;
            console.log(initialState.posts)
        });
        builder.addCase(loadPosts.rejected, (state: State) => {
            state.isPostsLoading = false;
        });
    }
});

export const selectAllPosts = (state) => state.posts.posts;
export const selectPostsLoad = (state) => state.posts.isPostsLoading;
export const selectPostById = (state, postId) =>
    state.posts.posts.find((post) => post.id === postId);

// export const { PostAdded, PostUpdated, reactionAdded } = postsSlice.actions;
export default postsSlice.reducer;

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
