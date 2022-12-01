import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../core/Store";

const usersModuleSelector = (state: RootState) => state.users;

export const usersSelector = createSelector(
  usersModuleSelector,
  (state) => state.users
);
