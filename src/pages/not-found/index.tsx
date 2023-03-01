import { FC } from "react";
import styles from "./not-found.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { textConstants } from "../../utils/constants";
import { TPage } from "../../utils/types";

const NotFoundPage: FC<TPage> = ({ textButton }) => {
  const { NOT_FOUND_NUMBER } = textConstants;

  return (
    <div className={styles.container}>
      <p className={`${styles.subtitle} text text_type_digits-large`}>
        {NOT_FOUND_NUMBER}
      </p>
      <Button htmlType="button" type="primary" size="medium">
        {textButton}
      </Button>
    </div>
  );
};

export default NotFoundPage;
