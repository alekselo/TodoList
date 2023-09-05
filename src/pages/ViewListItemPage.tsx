import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { TodoItem } from "../models/TodoItem";

export const ViewListItemPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const todoList = useSelector((state: RootState) => {
    return state.todoList.todos;
  });
  const [todo, setTodo] = useState<TodoItem>();

  const handleClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    const searchTodo = todoList.find((todo) => String(todo.id) === id);

    if (searchTodo) {
      setTodo(searchTodo);
    } else {
      navigate("/404");
    }
  }, [todoList, navigate, id]);

  return (
    <div className="container">
      <h1>{todo?.text}</h1>
      <button className="btnBack" onClick={handleClick}>
        Назад
      </button>
    </div>
  );
};
