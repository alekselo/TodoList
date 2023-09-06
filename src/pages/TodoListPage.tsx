import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form } from "../components/Form/Form.component";
import { TodoList } from "../components/TodoList/TodoList.component";
import { TodoItem } from "../models/TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { completeAction, createAction, deleteAction } from "../redux/todoList";

export const TodoListPage = () => {
  const todoList = useSelector((state: RootState) => {
    return state.todoList.todos;
  });
  const dispatch = useDispatch();

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
    dispatch(createAction(text));
  };

  const completeTodo = async (todoItem: TodoItem) => {
    try {
      await dispatch(completeAction(todoItem));
      notify("Задача обновлена!");
    } catch (error) {
      console.error("Ошибка при создании задачи:", error);
    }
  };

  const deleteTodo = async (todoItem: TodoItem) => {
    try {
      await dispatch(deleteAction(todoItem));
      notify("Задача удалена!");
    } catch (error) {
      console.error("Ошибка при удалении задачи:", error);
    }
  };

  return (
    <>
      <Form createNewTodo={createNewTodo} />
      <TodoList
        todos={todoList}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        theme="light"
      />
    </>
  );
};
