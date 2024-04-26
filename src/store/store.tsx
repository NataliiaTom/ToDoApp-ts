import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from '../features/todoListSlice'

export const store = configureStore({
    reducer: {
        myTodoList: todoListReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch