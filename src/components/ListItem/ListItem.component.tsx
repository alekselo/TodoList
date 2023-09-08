import { TodoItem } from "../../models/TodoItem";
import { Link } from "./ListItem.styled";

export const ListItem = ({ todo }: { todo: TodoItem }) => {
  return (
    <>
      <Link isDone={todo.isDone} rel="noreferrer" to={`/list/${todo.id}`}>
        {todo.text}
      </Link>
    </>
  );
};
