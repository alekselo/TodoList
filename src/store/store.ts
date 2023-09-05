import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../redux/todoList'
import { loadFromLocalStorage, saveToLocalStorage } from '../helpers/utils';



export const store = configureStore({
  reducer: {
    todoList: todoReducer,
  },
  preloadedState: loadFromLocalStorage(),
})

store.subscribe(() => saveToLocalStorage(store.getState()));

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
