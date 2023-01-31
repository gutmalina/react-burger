import styles from './nav-form.module.css';
import {
  NEW_USER,
  SIGN_UP,
  FORGOT_PASSWORD,
  RESTORE_PASSWORD,
  ALREADY_REGISTERED,
  GO_IN,
  REMEMBER_PASSWORD
} from "../../utils/constants";

function NavForm(){
  return (
    <ul className={styles.nav}>
      <li className="text text_type_main-default text_color_inactive mb-4">
        <p className={styles.subtitle}>
          {NEW_USER}
          <a className={`${styles.link} ml-2`}>
            {SIGN_UP}
          </a>
        </p>
      </li>
      <li className="text text_type_main-default text_color_inactive">
        <p className={styles.subtitle}>
          {FORGOT_PASSWORD}
          <a className={`${styles.link} ml-2`}>
            {RESTORE_PASSWORD}
          </a>
        </p>
      </li>
      <li className="text text_type_main-default text_color_inactive">
        <p className={styles.subtitle}>
          {ALREADY_REGISTERED}
          <a className={`${styles.link} ml-2`}>
            {GO_IN}
          </a>
        </p>
      </li>
      <li className="text text_type_main-default text_color_inactive">
        <p className={styles.subtitle}>
          {REMEMBER_PASSWORD}
          <a className={`${styles.link} ml-2`}>
            {GO_IN}
          </a>
        </p>
      </li>
    </ul>
  );
};

export { NavForm };
