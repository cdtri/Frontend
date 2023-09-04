import React from 'react'
import Header from './layouts/Header';
import Todos from './Todos';
import AddTodo from './AddTodo';
class TodoApp extends React.Component {
    state = {
        todos: [
            {
                id: 1,
                title: "Setup development environment",
                completed: true
            },
            {
                id: 2,
                title: "Develop website and add content",
                completed: false
            },
            {
                id: 3,
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
    render() {
        return (
            <div className='container'>
                <Header></Header>
                <AddTodo></AddTodo>
                <Todos todos={this.state.todos} handleCheckbox={this.handleCheckboxChange} deleteTodo={this.deleteTodo}></Todos>
            </div>
        )
    }
}
export default TodoApp;