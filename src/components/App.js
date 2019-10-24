import React, { Component } from 'react';

import AppHeader from './AppHeader/AppHeader';
import SearchPanel from './SearchPanel/SearchPanel';
import TodoList from './TodoList/TodoList';
import ItemStatusFilter from './ItemStatusFilter/ItemStatusFilter';
import ItemAddForm from './ItemAddForm/ItemAddForm';

import './App.css';

export default class App extends Component {
    maxId = 100;

    state = {
        todoData: [
            { label: "drink", important: false, id: 1 },
            { label: "fuck", important: true, id: 2 },
            { label: "ypur mun", important: false, id: 3 }
        ]
    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);

            ///we don't use "todoData.splice" because it will change state
            ///like "this.state.todoData = smth"
            ///then we need to create new Array without element, which we will delete
            ///this is react's rule: don't change state directly

            const before = todoData.slice(0, idx);
            const after = todoData.slice(idx + 1);
            const newArray = [
                ...before, ...after
            ];

            return {
                todoData: newArray
            };
        })
    }

    addItem = (text) => {
        this.setState(({ todoData }) => {
            const item = { label: text, important: false, id: this.maxId++ }
            const newArray = [...todoData, item];
            return {
                todoData: newArray
            }
        })
    }

    render() {
        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>

                <TodoList
                    todos={this.state.todoData}
                    onDeleted={this.deleteItem} />

                <ItemAddForm onAddItem={this.addItem} />
            </div>
        )
    }
}
