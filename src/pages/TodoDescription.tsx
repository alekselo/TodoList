import { useEffect, useState } from "react";
import { TodoItem } from "../models/TodoItem";
import { useNavigate, useParams } from "react-router-dom";

type Props = {
  todos: TodoItem[];
};

export const TodoDescription = ({ todos }: Props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [todo, setTodo] = useState<TodoItem>();

  const handleClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    const searchTodo = todos.find((todo) => String(todo.id) === id);
    console.log(searchTodo);

    if (searchTodo) {
      setTodo(searchTodo);
    } else {
      navigate("/404");
    }
  }, [todos, navigate, id]);

  return (
    <div className="container">
      <h1>{todo?.text}</h1>
      <button className="btnBack" onClick={handleClick}>
        Назад
      </button>
    </div>
  );
};
