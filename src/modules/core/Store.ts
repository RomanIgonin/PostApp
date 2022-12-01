import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postsReducer from "../media/posts/store/index";
import usersReducer from "../users/store/index";

const rootReducer = combineReducers({
  posts: postsReducer,
  users: usersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;

export default store;
