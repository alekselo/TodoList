import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form } from "../components/Form/Form.component";
import { Header } from "../components/Header/Header.component";
import { TodoList } from "../components/TodoList/TodoList.component";
import { TodoItem } from "../models/TodoItem";

export const TodoListForm = () => {
  const [todos, setTodos] = useState<TodoItem[]>([
    { text: "Первая задача", id: 0, isDone: false },
    {
      text: "Вторая задача",
      id: 1,
      isDone: true,
    },
    {
      text: "Выпить чай",
      id: 2,
      isDone: false,
    },
    {
      text: "Выпить яд",
      id: 3,
      isDone: false,
    },
  ]);

  const notify = (text: string) =>
    toast.warn(text, {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const createNewTodo = (text: string) => {
    const newTodo: TodoItem = {
      id: todos.length,
      text: text,
      isDone: false,
    };

    setTodos([...todos, newTodo]);
  };

  const completeTodo = (todoItem: TodoItem) => {
    const newTodos = todos.map((item) => {
      if (item.id === todoItem.id) {
        item.isDone = !todoItem.isDone;
      }
      return item;
    });

    setTodos(newTodos);
    notify("Задача обновлена!");
  };

  const deleteTodo = (todoItem: TodoItem) => {
    const newTodos = todos.filter((item) => item.id !== todoItem.id);
    setTodos(newTodos);
    notify("Задача удалена!");
  };

  return (
    <>
      <Header />
      <Form createNewTodo={createNewTodo} />
      <TodoList
        todos={todos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};
