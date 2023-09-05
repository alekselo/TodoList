import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

import styles from "./styles.module.scss";

export const Form = (props: { createNewTodo: Function }) => {
  const [text, setText] = useState("");

  const notify = () =>
    toast.success("Задача создана!", {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const formSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (text) {
      props.createNewTodo(text);
      setText("");
      notify();
    }
  };

  return (
    <>
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
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};
