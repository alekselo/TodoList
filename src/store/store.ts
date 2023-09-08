import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../redux/todoList'
import formReducer from '../redux/form'
import themeReducer from '../redux/themeList';
import { loadFromLocalStorage, saveToLocalStorage } from '../helpers/utils';



export const store = configureStore({
  reducer: {
    todoList: todoReducer,
    form: formReducer,
    themeList: themeReducer,
  },
  preloadedState: loadFromLocalStorage(),
})

store.subscribe(() => saveToLocalStorage(store.getState()));

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
