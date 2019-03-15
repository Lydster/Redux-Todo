import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions'

const initialState = {
    todos: [
        { todoText: "Learn Redux", id: 3294872, completed: false},
        { todoText: "Post to twitter", id: 3296672, completed: false}
    ]
}

function reducer(state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case ADD_TODO:
            const newTodo = {
                todoText: action.payload,
                id: Date.now(),
                completed: false
            };
            return {
                ...state,
                todos: [...state.todos, newTodo]
            };
        case TOGGLE_TODO:
        return {
            ...state,
            todos: state.todos.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo, 
                        completed: !todo.completed
                    }
                }
                return todo;
            })
        }
        case DELETE_TODO: 
            console.log(action.payload)
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
        default:
            return state;
    }
}

export default reducer;