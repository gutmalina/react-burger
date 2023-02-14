import styles from "./page-ingredient.module.css";
import { textType, childrenType } from "../../types";

function PageIngredient({ textTitle, children }) {
  return (
    <section className={styles.main}>
      <h1 className="text text_type_main-large mb-1">{textTitle}</h1>
      <div className={styles.container}>{children}</div>
    </section>
  );
}

PageIngredient.protoTypes = {
  textButton: textType.isRequired,
  children: childrenType,
};

export { PageIngredient };
