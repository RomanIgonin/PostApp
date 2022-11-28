import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../media/posts/store/index";
import usersReducer from "../users/store/index";

// const redux = require("redux");
// const applyMiddleware = redux.applyMiddleware;
// const reduxLogger = require("redux-logger");
// const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
  //тип типа dispatch будет вывден из middleware опции
  // middleware: new MiddlewareArray().concat(additionalMiddleware, logger),
});

export type AppDispatch = typeof store.dispatch;

// Вывод типов `RootState` и `AppDispatch` из самого хранилища
export type RootState = ReturnType<typeof store.getState>;

export default store;
