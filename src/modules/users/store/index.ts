import { createSlice } from "@reduxjs/toolkit";
import { loadUsers } from "./actions";
import { useSelector } from "react-redux";
import { RootState } from "../../core/Store";

export type User = {
  userId: number;
  name: string;
};

type UsersState = {
  users: User[];
  selectedUser: undefined | User;
  isUsersLoading: boolean;
};

const initialState: UsersState = {
  users: [],
  selectedUser: undefined,
  isUsersLoading: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // setSelectedUser: (state: UsersState, { payload }) => {
    //   const userId = payload;
    //   const user = state.users.find((user) => user.userId === userId);
    //   state.selectedUser = user;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(loadUsers.pending, (state: UsersState) => {
      state.isUsersLoading = true;
    });
    builder.addCase(loadUsers.fulfilled, (state: UsersState, { payload }) => {
      state.users = payload;
      state.isUsersLoading = false;
    });
    builder.addCase(loadUsers.rejected, (state: UsersState) => {
      state.isUsersLoading = false;
    });
  },
});

export default usersSlice.reducer;
export const usersActions = usersSlice.actions;
