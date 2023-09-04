import { useState } from "react";
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
  };

  const deleteTodo = (todoItem: TodoItem) => {
    const newTodos = todos.filter((item) => item.id !== todoItem.id);
    setTodos(newTodos);
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
    </>
  );
};
