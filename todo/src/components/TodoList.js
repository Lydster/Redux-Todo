import React from 'react';
import { connect } from "react-redux"
import { addTodo, toggleTodo, deleteTodo} from '../actions'



class TodoList extends React.Component {
    state = {
        newTodo: ""
    }

    handleChanges = e => {
        this.setState({ newTodo: e.target.value})
    }

    addTodo = e => {
        e.preventDefault();
        this.props.addTodo(this.state.newTodo);
        this.setState({ newTodo: ''});
    }

    toggleTodo = id => {
        this.props.toggleTodo(id);
    }

    deleteTodo = id => {
        this.props.deleteTodo(id);
    }

    render() {
        return(
            <>
                <div className='todo-list'>
                    {this.props.todoList.map(todo => (
                        <h4 key={todo.id} >
                            {todo.todoText}
                            <button onClick={() => this.deleteTodo(todo.id)}>Delete</button>
                        </h4>
                    ))}
                </div>
                <form onSubmit={this.addTodo}>
                <input 
                    type="text"
                    name="todoText"
                    value={this.state.newTodo}
                    onChange={this.handleChanges}
                    placeholder="Add To-Do"
                />
                </form>
                <button onClick={this.addTodo}>Add To-Do</button>
            </>
        )
    }
}


const mapStateToProps = state => {
    return {
        todoList: state.todos
    }
}


export default connect(mapStateToProps, {addTodo, toggleTodo, deleteTodo})(TodoList)