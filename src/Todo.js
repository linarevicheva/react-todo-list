import React, {Component} from "react";
import './Todo.css'

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            task: this.props.task
        }
        this.handleRemove = this.handleRemove.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleChange (evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    handleSubmit (evt) {
        evt.preventDefault();
        this.props.updateTodo(this.props.id, this.state.task);
        this.setState({ isEditing: false })
    }

    handleRemove () {
        this.props.removeTodo(this.props.id);
    }

    toggleForm () {
        this.setState({
            isEditing: !this.state.isEditing
        });
    }

    handleToggle (evt) {
        this.props.toggleTodo(this.props.id);
    }

    render () {
        let result;
        if (this.state.isEditing) {
            result = (
            <div classname = "Todo">
                <form className = "Todo-edit-form" onSubmit={this.handleSubmit}>
                    <input 
                    type = "text" 
                    value = {this.state.task} 
                    name = "task"
                    onChange = {this.handleChange}
                    />
                    <button>Submit</button>
                </form>
            </div>
            );
        } else {
            result = (
                <div className="Todo">
                <li className={this.props.completed 
                    ? "Todo-task completed" 
                    : "Todo-task"} 
                    onClick = {this.handleToggle}>
                    {this.props.task}
                    </li>
                <div className="Todo-buttons">
                <button onClick={this.toggleForm}><i class="fa-solid fa-pen"></i></button>
                <button onClick={this.handleRemove}><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>
            );
        }
        return result;
    }
}

export default Todo;