// создает экземпляр магазина Redux
import { configureStore, MiddlewareArray } from "@reduxjs/toolkit";
// import additionalMiddleware from "additional-middleware";
// import logger from "redux-logger";
import postsReducer from "../media/posts/store/index";
import usersReducer from "../users/store/index";

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
