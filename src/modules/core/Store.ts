import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postsReducer from "../media/posts/store/index";
import usersReducer from "../users/store/index";

// const redux = require("redux");
// const applyMiddleware = redux.applyMiddleware;
// const reduxLogger = require("redux-logger");
// const logger = reduxLogger.createLogger();

const rootReducer = combineReducers({
  posts: postsReducer,
  users: usersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;

// Вывод типов `RootState` и `AppDispatch` из самого хранилища
// export type RootState = ReturnType<typeof store.getState>;

export default store;
