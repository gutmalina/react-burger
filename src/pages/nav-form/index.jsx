import { Link, useLocation } from 'react-router-dom';
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
  const { pathname } = useLocation();

  return (
    <>
    {
      pathname === '/login'
      &&
      <ul className={styles.nav}>
        <li className="text text_type_main-default text_color_inactive mb-4">
          <p className={styles.subtitle}>
            {NEW_USER}
            <Link to='/register' className={`${styles.link} ml-2`}>
              {SIGN_UP}
            </Link>
          </p>
        </li>
        <li className="text text_type_main-default text_color_inactive">
          <p className={styles.subtitle}>
            {FORGOT_PASSWORD}
            <Link to='/forgot-password' className={`${styles.link} ml-2`}>
              {RESTORE_PASSWORD}
            </Link>
          </p>
        </li>
      </ul>
    }
    {
      pathname === '/register'
      &&
      <ul className={styles.nav}>
        <li className="text text_type_main-default text_color_inactive">
          <p className={styles.subtitle}>
            {ALREADY_REGISTERED}
            <Link to='/login' className={`${styles.link} ml-2`}>
              {GO_IN}
            </Link>
          </p>
        </li>
      </ul>
    }
    {
      (pathname === '/forgot-password' || pathname === '/reset-password')
      &&
      <ul className={styles.nav}>
        <li className="text text_type_main-default text_color_inactive">
          <p className={styles.subtitle}>
            {REMEMBER_PASSWORD}
            <Link to='/login' className={`${styles.link} ml-2`}>
              {GO_IN}
            </Link>
          </p>
        </li>
      </ul>
    }
    </>
  );
};

export { NavForm };
