import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TodoItem } from '../models/TodoItem'

export interface TodoState {
  todos: TodoItem[]
}

const initialState: TodoState = {
  todos: [],
}

export const todoSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    createAction: (state, action: PayloadAction<string>) => {
        const newTodos: TodoItem = {
            id: state.todos.length,
            text: action.payload,
            isDone: false,
          };
          state.todos = [...state.todos, newTodos]
      
    },
    completeAction: (state, action: PayloadAction<TodoItem>) => {
        const newTodos = state.todos.map((item) => {
            if (item.id === action.payload.id) {
                item.isDone = !item.isDone;
              }
              return item;
        })
        state.todos = newTodos;

    },
    deleteAction: (state, action: PayloadAction<TodoItem>) => {
        const newTodos = state.todos.filter((item) => item.id !== action.payload.id);
        state.todos = newTodos;
    },
  },
})

export const { createAction, completeAction, deleteAction } = todoSlice.actions;

export default todoSlice.reducer;
