import { createSlice } from "@reduxjs/toolkit";


const todoSlice = createSlice({
     name:'todos',
     initialState:[],
     reducers:{
          addTodo: (state,action) => {
               const newTodo = {
                    id:Date.now(),
                    title:action.payload.title,
                    completed:false
               };
               state.push(newTodo)
          },
          todoComplete:(state,action)=>{
               const id = state.findIndex(todo=>todo.id===action.payload.id) 
               state[id].completed = action.payload.completed
          },
          deleteTodo:(state,action)=>{
               return state.filter(todo=>todo.id !== action.payload.id);
          },
          editTodo:(state,action)=>{
               const id = state.findIndex(todo=>todo.id===action.payload.id) 
               state[id].title =  action.payload.title
          }
     }
})

export default todoSlice
export const todoActions = todoSlice.actions