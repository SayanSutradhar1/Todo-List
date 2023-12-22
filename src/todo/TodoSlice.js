import { createSlice, nanoid } from "@reduxjs/toolkit";


export const todoSlice = createSlice({
    name : 'todo',
    initialState : {
        todos : []
    },
    reducers : {
        addTodo : (state,action) =>{
            const todo = {
                id : nanoid(),
                text : action.payload,
                completed : false
            }
            state.todos.push(todo)
            // localStorage.setItem('todos',JSON.stringify([...state.todos,todo]))
        },
        removeTodo : (state,action) =>{
            state.todos = state.todos.filter((todo) => (todo.id !== action.payload))
        },
        toggleComplete : (state,action) =>{
            state.todos.map((todo) => {
                if(todo.id === action.payload){
                    todo.completed = true
                }
            })
        }

    }
})



export const {addTodo,removeTodo,toggleComplete} = todoSlice.actions

export default todoSlice.reducer