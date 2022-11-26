import { createSlice } from "@reduxjs/toolkit";
import { loadUsers } from "./actions";
import { useSelector } from "react-redux";
import { RootState } from "../../core/Store";

type State = {
  users: any[];
  isUsersLoading: boolean;
};

const initialState = {
  users: [],
  isUsersLoading: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadUsers.pending, (state: State) => {
      state.isUsersLoading = true;
    });
    builder.addCase(loadUsers.fulfilled, (state: State, { payload }) => {
      state.users = payload;
      state.isUsersLoading = false;
    });
    builder.addCase(loadUsers.rejected, (state: State) => {
      state.isUsersLoading = false;
    });
  },
});

export const selectUserById = (state: RootState, userId: String) =>
  state.users.users.find((user: any) => user.userId === userId);

export default usersSlice.reducer;
