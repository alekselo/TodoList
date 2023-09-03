import styles from "./styles.module.scss";

export const Form = () => {
  return (
    <div className={styles.formWrapper}>
      <form action="#">
        <label>
          <input type="text" />
          <button></button>
        </label>
      </form>
    </div>
  );
};
