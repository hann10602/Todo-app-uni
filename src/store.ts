import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import { todoReducer } from './redux/todo.reducer'

export const store = configureStore({
    reducer: {blog: todoReducer}
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;