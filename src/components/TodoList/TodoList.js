import React from 'react';

import TodoListItem from '../TodoListItem/TodoListItem';
import './TodoList.css';

const TodoList = ({ todos, onDeleted }) => {
    const elements = todos.map((item) => {
        return (
            < li key={item.id} className="list-group-item" >
                <TodoListItem
                    {...item}
                    onDeleted={() => onDeleted(item.id)} />
            </li >
        )
    })

    return (
        <ul className="list-group todolist">
            {elements}
        </ul>
    )
}

export default TodoList;