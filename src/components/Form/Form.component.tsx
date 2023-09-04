import styles from "./styles.module.scss";
import { useState } from "react";

export const Form = (props: { createNewTodo: Function }) => {
  const [text, setText] = useState("");

  const formSubmit = () => {
    if (text) {
      props.createNewTodo(text);
      setText("");
    }
  };

  return (
    <div className={styles.formWrapper}>
      <form action="#" onSubmit={formSubmit}>
        <label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button></button>
        </label>
      </form>
    </div>
  );
};
