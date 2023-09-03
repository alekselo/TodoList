import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <a href="/">ToDo</a>
      </div>
    </header>
  );
};
