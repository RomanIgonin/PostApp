// создает экземпляр магазина Redux
import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../media/posts/PostsSlice'
import usersReducer from '../users/UsersSlice'

export default configureStore({
    reducer: {
        posts: postsReducer,
        users: usersReducer
    }
})
