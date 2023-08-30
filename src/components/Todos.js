import React from 'react'
import TodoItem from './TodoItem';
class Todos extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.todos.map(todo => (
                        <TodoItem todo={todo} handleCheckbox={this.props.handleCheckbox} deleteTodo={this.props.deleteTodo}></TodoItem>
                    ))}
                </ul>
            </div>
        )
    }
}
export default Todos;