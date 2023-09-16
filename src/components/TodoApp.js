import React from 'react'
import Header from './layouts/Header';
import Todos from './Todos';
import AddTodo from './AddTodo';
import {v4 as uuidv4} from 'uuid';
class TodoApp extends React.Component {
    state = {
        todos: [
            {
                id: uuidv4(),
                title: "Setup development environment",
                completed: true
            },
            {
                id: uuidv4(),
                title: "Develop website and add content",
                completed: false
            },
            {
                id: uuidv4(),
                title: "Deploy to live server",
                completed: false
            }
        ]
    };
    handleCheckboxChange = id => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        })
    }
    deleteTodo = id => {
        this.setState({
            todos: this.state.todos.filter(todo => {
                if (todo.id !== id) return todo;
            })
        })
    }
    addTodo = title => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        }
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }
    render() {
        return (
            <div className='container'>
                <Header></Header>
                <AddTodo addTodo={this.addTodo}></AddTodo>
                <Todos todos={this.state.todos} handleCheckbox={this.handleCheckboxChange} deleteTodo={this.deleteTodo}></Todos>
            </div>
        )
    }
}
export default TodoApp;