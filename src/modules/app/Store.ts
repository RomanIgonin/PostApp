// создает экземпляр магазина Redux
import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../media/posts/store/index'
import usersReducer from '../users/store/index'

export default configureStore({
    reducer: {
        posts: postsReducer,
        users: usersReducer
    }
})
