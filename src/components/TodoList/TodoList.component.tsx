import { TodoListItem } from "./TodoListItem/TodoListItem.component";
import cn from "classnames";
import styles from "./styles.module.scss";
import { TodoItem } from "../../models/TodoItem";

export const TodoList = (props: {
  todos: TodoItem[];
  completeTodo: Function;
  deleteTodo: Function;
}) => {
  const getNoTasksMessage = (listType: string) => {
    return listType === "checked" ? (
      <p className={styles.noItemMessage}>Нет невыполненных задач</p>
    ) : (
      <p className={styles.noItemMessage}>Нет выполненных задач</p>
    );
  };
  const checkedList = () => {
    const uncheckedTodos = props.todos.filter((item) => !item.isDone);

    if (uncheckedTodos.length === 0) {
      return getNoTasksMessage("checked");
    }

    return uncheckedTodos.map((item, id) => (
      <TodoListItem
        item={item}
        key={id}
        completeTodo={props.completeTodo}
        deleteTodo={props.deleteTodo}
      />
    ));
  };

  const unCheckedList = () => {
    const completedTodos = props.todos.filter((item) => item.isDone);

    if (completedTodos.length === 0) {
      return getNoTasksMessage("unchecked");
    }

    return completedTodos.map((item, id) => (
      <TodoListItem
        item={item}
        key={id}
        completeTodo={props.completeTodo}
        deleteTodo={props.deleteTodo}
      />
    ));
  };

  return (
    <div className={styles.todoContainer}>
      <ul className={cn(styles.todoList, styles.failed)}>{checkedList()}</ul>
      <ul className={cn(styles.todoList, styles.completed)}>
        {unCheckedList()}
      </ul>
    </div>
  );
};
