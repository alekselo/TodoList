import { TodoListItem } from "./TodoListItem/TodoListItem.component";
import cn from "classnames";
import styles from "./styles.module.scss";

export const TodoList = () => {
  return (
    <div className={styles.todoContainer}>
      <ul className={cn(styles.todoList, styles.failed)}>
        <TodoListItem />
      </ul>
      <ul className={cn(styles.todoList, styles.completed)}>
        <TodoListItem />
        {/* <li className="todo-list-item__wrapper">
          <span>Вторая задача</span>
          <div className="todo-list-item__buttons">
            <button className="btn-trash"></button>
            <button className="btn-uncheck"></button>
          </div>
        </li> */}
      </ul>
    </div>
  );
};
