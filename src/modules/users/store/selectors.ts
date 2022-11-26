import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../core/Store";

const usersModuleSelector = (state: RootState) => state.users;

export const usersSelector = createSelector(
  usersModuleSelector,
  (state) => state.users
);

// export const selectUserById = createSelector(
//   (state: RootState, userId: string) =>
// );
// export const selectUserById = (state: RootState, userId: String) =>
//   state.users.users.find((user: any) => user.userId === userId);
