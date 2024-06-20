import {createSlice ,nanoid} from '@reduxjs/toolkit';
const initialState = {
    todos: [  ...JSON.parse(localStorage.getItem("todos"))]
}
// that is how you do it
    
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo:(state,action)=>{
const todo={
    id:nanoid(),
    text:action.payload,
   completed:false
}
state.todos.push(todo)
localStorage.setItem("todos", JSON.stringify(state.todos))

        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
            localStorage.setItem("todos", JSON.stringify(state.todos))
        }

    ,
    compleletedTodo:(state,action)=>{
        state.todos= state.todos.map(todo=>
            todo.id===action.payload?{...todo,completed:!todo.completed}:todo
            )  
            localStorage.setItem("todos", JSON.stringify(state.todos))
    },
    },


})


export const {addTodo,removeTodo,compleletedTodo}=todoSlice.actions
export default todoSlice.reducer