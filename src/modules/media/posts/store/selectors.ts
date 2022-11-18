// переделать под посты
import { createSelector } from "@reduxjs/toolkit";

const postsModuleSelector = (state) => state.reducer.posts;

export const postsSelector = createSelector(
    postsModuleSelector,
    (state) => state.posts
);
