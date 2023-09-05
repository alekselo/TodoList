import { NavLink } from "react-router-dom";
import cn from "classnames";
import styles from "./styles.module.scss";

export const Header = () => {
  const getActiveClass = ({ isActive }: { isActive: boolean }): string => {
    return isActive ? cn(styles.active, styles.link) : styles.link;
  };
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <NavLink to="/" className={getActiveClass}>
          Home
        </NavLink>
        <NavLink to="/todo" className={getActiveClass}>
          ToDo
        </NavLink>
      </div>
    </header>
  );
};
