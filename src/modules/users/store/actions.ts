import { createAsyncThunk } from "@reduxjs/toolkit";
import usersService from "../services/UsersService";

const PREFIX = "users";

export const loadUsers = createAsyncThunk(`${PREFIX}/loadUsers`, async () => {
  return await usersService.getUsers();
});
