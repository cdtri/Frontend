import React from 'react'
import Header from './layouts/Header';
import Todos from './Todos';
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
    handleCheckboxChange = (id) => {
        console.log("you clicked on checkbox with id " + id);
    }
    render() {
        return (
            <div className='container'>
                <Header></Header>
                <Todos todos={this.state.todos} handleCheckbox={this.handleCheckboxChange}></Todos>
            </div>
        )
    }
}
export default TodoApp;