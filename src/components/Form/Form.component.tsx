import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "./styles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setText } from "../../redux/form";
import { RootState } from "../../store/store";

interface FormProps {
  createNewTodo: (text: string) => void;
}

export const Form: React.FC<FormProps> = ({ createNewTodo }) => {
  const text = useSelector((state: RootState) => {
    return state.form.text;
  });

  const dispatch = useDispatch();

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

  const formSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (text) {
      try {
        await createNewTodo(text);
        dispatch(setText(text));
        dispatch(setText(""));
        notify();
      } catch (error) {
        console.error("Ошибка при создании задачи:", error);
      }
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
              onChange={(e) => dispatch(setText(e.target.value))}
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
