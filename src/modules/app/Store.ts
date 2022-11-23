// создает экземпляр магазина Redux
import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../media/posts/store/index";
import usersReducer from "../users/store/index";

const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
});

// Предполагаемый тип: {сообщения: PostsState, комментарии: CommentState, пользователи: UsersState}
export type AppDispatch = typeof store.dispatch;
// Вывод типов `RootState` и `AppDispatch` из самого хранилища
export type RootState = ReturnType<typeof store.getState>;

export default store;
