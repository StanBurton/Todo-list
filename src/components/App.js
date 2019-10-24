import React from 'react';

import AppHeader from './AppHeader/AppHeader';
import SearchPanel from './SearchPanel/SearchPanel';
import TodoList from './TodoList/TodoList';
import ItemStatusFilter from './ItemStatusFilter/ItemStatusFilter';

import './App.css';

const App = () => {

    const todoData = [
        { label: "drink", important: false, id: 1 },
        { label: "fuck", important: true, id: 2 },
        { label: "ypur mun", important: false, id: 3 }
    ];

    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={3} />
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>

            <TodoList todos={todoData} />
        </div>
    )
}

export default App;