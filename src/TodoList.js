import React, {Component} from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import './TodoList.css';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {todos: []}
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.submit = this.submit.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
    }

    create (newTodo) {
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }

    remove (id) {
        this.setState({
            todos: this.state.todos.filter(t => t.id !== id)
        })
    }

    submit (id, updatedTask) {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return {...todo, task: updatedTask}
            }
            return todo;
        });
        this.setState({ todos: updatedTodos})
    }

    toggleCompletion (id) {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return {...todo, completed: !todo.completed}
            }
            return todo;
        });
        this.setState({ todos: updatedTodos})
    }

    render () {
        const todos = this.state.todos.map (todo => {
            return (
            <Todo 
            key = {todo.id} 
            task = {todo.task}
            id = {todo.id}
            completed = {todo.completed} 
            removeTodo = {this.remove}
            updateTodo = {this.submit}
            toggleTodo = {this.toggleCompletion}
            />
            );
        })
        return (
            <div className="TodoList">
                <h1>Todo List <span>A simple React Todo list app</span></h1>
                <ul>{todos}</ul>
                <NewTodoForm createTodo = {this.create} />
            </div>
        )
    }
}

export default TodoList;