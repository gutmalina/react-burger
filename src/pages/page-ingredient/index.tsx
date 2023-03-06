import { FC, PropsWithChildren } from "react";
import styles from "./page-ingredient.module.css";
import { TPage } from "../../utils/types";

const PageIngredient: FC<PropsWithChildren<TPage>> = ({ textTitle, children }) => {
  return (
    <section className={styles.main}>
      <h1 className="text text_type_main-large mb-1">{textTitle}</h1>
      <div className={styles.container}>{children}</div>
    </section>
  );
};

export default PageIngredient;
