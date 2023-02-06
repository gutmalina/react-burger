import styles from './not-found.module.css';
import {
  Button
} from "@ya.praktikum/react-developer-burger-ui-components";
import { PAGE_NOT_FOUND_SUBTITLE } from "../../utils/constants";

function NotFoundPage({textButton}){
  return(
    <div className={styles.container}>
      <p
        className={`${styles.subtitle} text text_type_digits-large`}>
          {PAGE_NOT_FOUND_SUBTITLE}
      </p>
      <Button
        htmlType="button"
        type="primary"
        size="medium">
        {textButton}
      </Button>
    </div>
  );
};

export { NotFoundPage };
