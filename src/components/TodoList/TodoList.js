import React from 'react';

import TodoListItem from '../TodoListItem/TodoListItem';
import './TodoList.css';

const TodoList = ({ todos }) => {
    const elements = todos.map((item) => {
        return (
            <li key={item.id} className="list-group-item">
                <TodoListItem {...item} />
            </li>
        )
    })

    return (
        <ul className="list-group todolist">
            {elements}
        </ul>
    )
}

export default TodoList;