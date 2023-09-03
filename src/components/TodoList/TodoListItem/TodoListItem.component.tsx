import cn from "classnames";
import styles from "./styles.module.scss";

export const TodoListItem = () => {
  return (
    <li className={styles.itemWrapper}>
      <span>Первая задача</span>
      <div className={styles.itemButtons}>
        <button className={cn(styles.btn, styles.btnTrash)}></button>
        <button className={cn(styles.btn, styles.btnCheck)}></button>
      </div>
    </li>
  );
};
