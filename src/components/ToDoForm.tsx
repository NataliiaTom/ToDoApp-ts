import React, { useRef, useEffect, useState, FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { addItem } from '../features/todoListSlice'
import TodoList from './ToDoList';
import { AppDispatch, RootState } from '../store/store'
import { type ToDoItem, ToDoItemImpl } from '../types'

function ToDoForm() {

    const toDo = useAppSelector((state: RootState) => state.myTodoList.data)
    const dispatch: AppDispatch = useAppDispatch()

    const [item, setItem] = useState<ToDoItem>(new ToDoItemImpl(''))

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setItem(new ToDoItemImpl(e.target.value))
    }

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault()
        dispatch(addItem(item.getText()))
        item.setText("");
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <input value={item.getText()} placeholder="What needs to be done?" onChange={(e) => handleChange(e)} />
                <button type="submit">
                    Add
                </button>
            </form>
            <TodoList />
        </>
    );
}

export default ToDoForm