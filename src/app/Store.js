import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../todo/TodoSlice'

const store = configureStore({
    reducer: todoReducer
})

export default store