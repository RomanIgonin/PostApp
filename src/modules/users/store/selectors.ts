import { createSelector } from "@reduxjs/toolkit";

const usersModuleSelector = (state) => state.reducer.users;

export const usersSelector = createSelector(
  usersModuleSelector,
  (state) => state.users
);
