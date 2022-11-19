import { createSelector } from "@reduxjs/toolkit";

// const usersModuleSelector = (state) => state.reducer.users;
const usersModuleSelector = (state) => state.users.users;

export const usersSelector = createSelector(
  usersModuleSelector,
  (state) => state.users
);
