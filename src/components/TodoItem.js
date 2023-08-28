import React from "react";
class TodoItem extends React.Component {
    render() {
        return (
            <li className="todo-item" key={this.props.todo.id}>
                <input type="checkbox" checked={this.props.todo.completed} onChange={() => {this.props.handleCheckbox(this.props.todo.id)}} />
                <span className={this.props.todo.completed ? "completed" : null}>{this.props.todo.title}</span>
            </li>
        )
    }
}
export default TodoItem;