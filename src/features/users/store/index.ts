import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosGetUsers from "../../api/AxiosGetPosts";
import { loadUsers } from "./actions";

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

export default usersSlice.reducer;
