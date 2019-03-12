export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

export const addTodo = todoText => {
    console.log(todoText);
    return {
        type: ADD_TODO,
        payload: todoText
    }
}


export const toggleTodo = id => {
    return {
        type: TOGGLE_TODO,
        payload: id
    }
}