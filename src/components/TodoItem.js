import React from "react";
class TodoItem extends React.Component {
    render() {
        return (
            <li className="todo-item" key={this.props.todo.id}>
                <input type="checkbox" />{this.props.todo.title}
            </li>
        )
    }
}
export default TodoItem;