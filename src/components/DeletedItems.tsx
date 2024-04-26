import React from 'react';
import { useAppSelector, useAppDispatch } from '../store/hooks'
import { deleteElement } from '../features/todoListSlice'
import './DeletedItems.scss'
import { AppDispatch, RootState } from '../store/store'
import { type ToDoItem, ToDoItemImpl } from '../types'

function DeletedItems() {
    const toDo = useAppSelector((state: RootState) => state.myTodoList.deleted)
    const dispatch: AppDispatch = useAppDispatch()



    return (
        <div>
            <h2>Deleted elements:</h2>
            <ul>
                {toDo.map((el: ToDoItem) => <li key={el.getId()}>{el.getText()}</li>)}
            </ul>
        </div>
    )
}
export default DeletedItems