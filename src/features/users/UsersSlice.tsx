import { createSlice } from '@reduxjs/toolkit'
import AxiosGetUsers from "../../api/AxiosGetPosts";

const initialState = [
    { userId: 1, name: 'Roman Igonin'},
    { userId: 2, name: 'Kamilla Khusainova'},
    { userId: 3, name: 'Perigrin Tuk'},
    { userId: 4, name: 'Frodo Baggins'},
]
// const initialState = AxiosGetUsers()

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})
export default usersSlice.reducer
