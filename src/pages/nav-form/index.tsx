import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./nav-form.module.css";
import {
  linkConstants,
  textConstants,
  pathConstants,
} from "../../utils/constants";

const NavForm: FC = () => {
  const { pathname } = useLocation();
  const { REGISTER_LINK, RESTORE_PASSWORD, GO_IN } = linkConstants;
  const {
    YOU_NEW_USER,
    FORGOT_YOUR_PASSWORD,
    ALREADY_REGISTERED,
    REMEMBER_PASSWORD,
  } = textConstants;
  const { SIGN_IN, SIGN_UP, FORGOT, RESET } = pathConstants;

  return (
    <>
      {pathname === SIGN_IN && (
        <ul className={styles.nav}>
          <li className="text text_type_main-default text_color_inactive mb-4">
            <p className={styles.subtitle}>
              {YOU_NEW_USER}
              <Link to={SIGN_UP} className={`${styles.link} ml-2`}>
                {REGISTER_LINK}
              </Link>
            </p>
          </li>
          <li className="text text_type_main-default text_color_inactive">
            <p className={styles.subtitle}>
              {FORGOT_YOUR_PASSWORD}
              <Link to={FORGOT} className={`${styles.link} ml-2`}>
                {RESTORE_PASSWORD}
              </Link>
            </p>
          </li>
        </ul>
      )}
      {pathname === SIGN_UP && (
        <ul className={styles.nav}>
          <li className="text text_type_main-default text_color_inactive">
            <p className={styles.subtitle}>
              {ALREADY_REGISTERED}
              <Link to={SIGN_IN} className={`${styles.link} ml-2`}>
                {GO_IN}
              </Link>
            </p>
          </li>
        </ul>
      )}
      {(pathname === FORGOT || pathname === RESET) && (
        <ul className={styles.nav}>
          <li className="text text_type_main-default text_color_inactive">
            <p className={styles.subtitle}>
              {REMEMBER_PASSWORD}
              <Link to={SIGN_IN} className={`${styles.link} ml-2`}>
                {GO_IN}
              </Link>
            </p>
          </li>
        </ul>
      )}
    </>
  );
}

export default NavForm;
