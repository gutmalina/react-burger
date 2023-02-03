import { useLocation, NavLink } from 'react-router-dom';
import { NavForm } from "../nav-form";
import styles from './auth-page.module.css';
import {
  PATH_HOME,
  PATH_PROFILE,
  PATH_ORDER_HISTORY,
  PROFILE_PAGE_SUBTITLE,
  PROFILE,
  ORDER_HISTORY,
  EXIT
} from '../../utils/constants';

function AuthPage({
  textTitle,
  children
}){
  const { pathname } = useLocation();
  const mainClassName = (pathname === PATH_PROFILE)
  ? `${styles.main_profile}`
  : `${styles.main}`;
  const activeClassLink = `${styles.link} text text_type_main-medium`;
  const inActiveClassLink = `${styles.link} ${styles.link_inactive} text text_type_main-medium`

  return(
    <section className={mainClassName}>
      {
        pathname === PATH_PROFILE
        ?
        <ul className={styles.nav}>
          <NavLink
            to={PATH_PROFILE}
            className={({ isActive }) =>
              isActive ? activeClassLink : inActiveClassLink}
            >
              {PROFILE}
          </NavLink>
          <NavLink
            to={PATH_ORDER_HISTORY}
            className={({ isActive }) =>
              isActive ? activeClassLink : inActiveClassLink}
            >
              {ORDER_HISTORY}
          </NavLink>
          <NavLink
            to={PATH_HOME}
            className={({ isActive }) =>
              isActive ? activeClassLink : inActiveClassLink}
            >
              {EXIT}
          </NavLink>
          <p className={`${styles.subtitle} text text_type_main-default text_color_inactive mt-20`}>
            {PROFILE_PAGE_SUBTITLE}
          </p>
        </ul>
        :
        <h1 className="text text_type_main-medium mb-4">
          {textTitle}
        </h1>
      }
      {children}
      <NavForm/>
    </section>
  );
};

export { AuthPage };
