import { useNavigate } from "react-router-dom";
import styles from "./style.module.scss";

export const NotFountPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <section className={styles.page404}>
      <div className={styles.fourZeroFourBg}>
        <h1 className={styles.title}>404</h1>
      </div>

      <div className={styles.contantBox404}>
        <h3 className="h2">Кажется вы потерялись!</h3>

        <p>Страница которую вы ищите недоступна!</p>

        <button className="btnBack" onClick={handleClick}>
          Назад
        </button>
      </div>
    </section>
  );
};
