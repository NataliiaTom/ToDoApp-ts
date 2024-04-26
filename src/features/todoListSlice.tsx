import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { type ToDoItem, ToDoItemImpl } from '../types'

interface RootState {
    data: ToDoItem[],
    deleted: ToDoItem[]
}

const initialState: RootState = {
    data: [],
    deleted: []
}

const todoListSlice = createSlice({
    name: 'todoList',
    initialState,
    reducers: {
        addItem(state: RootState, action: PayloadAction<string>) {
            return {
                ...state,
                data: [
                    ...state.data,
                    new ToDoItemImpl(action.payload)
                ]
            };
        },
        deleteElement(state: RootState, action: PayloadAction<number>) {
            let deletedEl: ToDoItem | undefined = state.data.find(el => el.getId() === action.payload)
            return deletedEl ? {
                data: state.data.filter(el => el.getId() != action.payload),
                deleted: [...state.deleted,
                    deletedEl
                ]
            } : state;
        }
    }
})

export const { addItem, deleteElement } = todoListSlice.actions;
export default todoListSlice.reducer; 