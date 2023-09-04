import cn from "classnames";
import styles from "./styles.module.scss";
import { TodoItem } from "../../../models/TodoItem";

export const TodoListItem = (props: {
  item: TodoItem;
  completeTodo: Function;
  deleteTodo: Function;
}) => {
  return (
    <li className={styles.itemWrapper}>
      <span>{props.item.text}</span>
      <div className={styles.itemButtons}>
        <button
          className={cn(styles.btn, styles.btnTrash)}
          onClick={() => props.deleteTodo(props.item)}
        ></button>
        <button
          className={cn(
            styles.btn,
            props.item.isDone ? styles.btnCheck : styles.btnUncheck
          )}
          onClick={() => props.completeTodo(props.item)}
        ></button>
      </div>
    </li>
  );
};
