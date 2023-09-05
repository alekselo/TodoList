import { TodoItem } from "../../models/TodoItem";
import cn from "classnames";
import styles from "./style.module.scss";
import { NavLink } from "react-router-dom";

export const ListItem = ({ todo }: { todo: TodoItem }) => {
  return (
    <>
      <NavLink
        className={cn(styles.link, todo.isDone ? styles.done : styles.notDone)}
        rel="noreferrer"
        to={`/list/${todo.id}`}
      >
        {todo.text}
      </NavLink>
    </>
  );
};
