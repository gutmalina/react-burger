import { FC } from "react";
import styles from "./preloader.module.css";
import { textConstants } from "../../utils/constants";

const Preloader: FC = () => {
  const { PRELOADER_TITLE } = textConstants;

  return (
    <div className={styles.preloader}>
      <h1 className={`${styles.preloader_title} text text_type_main-large`}>
        {PRELOADER_TITLE}
      </h1>
      <div className={styles.container}>
        <span className={styles.round}></span>
      </div>
    </div>
  );
};

export default Preloader;
