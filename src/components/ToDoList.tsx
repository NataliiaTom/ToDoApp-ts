import React from 'react';
import { useAppSelector, useAppDispatch } from '../store/hooks'
import { deleteElement } from '../features/todoListSlice'
import { AppDispatch, RootState } from '../store/store'
import { type ToDoItem, ToDoItemImpl } from '../types'
import './ToDoList.scss'

function TodoList() {
    const toDo = useAppSelector((state: RootState) => state.myTodoList)
    const dispatch: AppDispatch = useAppDispatch()

    const deleteItem = (id: number) => {
        dispatch(deleteElement(id))

    }

    return (
        <div>
            <ul>
                {toDo.data.map((el: ToDoItem) => {
                    return <div className="addedElements" key={el.getId()} onClick={() => deleteItem(el.getId())} >
                        <li key={el.getId()}>{el.getText()}</li><button>Delet</button>
                    </div>
                })}
            </ul>

        </div>
    )
}
export default TodoList