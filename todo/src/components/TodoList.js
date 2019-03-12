import React from 'react';
import { connect } from "react-redux"



class TodoList extends React.Component {
    state = {
        newTodo: ""
    }

    handleChanges = e => {
        this.setState({ newMember: e.target.value})
    }

    addTodo = e => {
        e.preevntDefault();
        this.props.addTodo(this.state.newTodo);
        this.setState({ newMember: ''});
    }

    toggleTodo = id => {
        this.props.toggleMember(id);
    }

    render() {
        return(
            <>
                <div className='todo-list'>
                    {this.props.todoList.map(todo => (
                        <h4 key={todo.id} >
                            {todo.text}
                        </h4>
                    ))}
                </div>
            </>
        )
    }
}


const mapStateToProps = state => {
    return {
        todoList: state.todos
    }
}


export default connect(mapStateToProps, {})(TodoList)