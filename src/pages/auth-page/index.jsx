import { useLocation, NavLink } from 'react-router-dom';
import { NavForm } from "../nav-form";
import { logoutRequestAction } from '../../services/actions/user';
import { deleteUserAction } from '../../services/actions/user';
import { deleteCookie } from '../../utils/cookie';
import styles from './auth-page.module.css';
import {
  PATH_PROFILE,
  PATH_NOT_FOUND,
  PROFILE_PAGE_SUBTITLE,
  PROFILE,
  ORDER_HISTORY,
  EXIT,
  ACCESS_TOKEN,
  REFRESH_TOKEN
} from '../../utils/constants';
import { useDispatch, useSelector } from 'react-redux';

function AuthPage({
  textTitle,
  children
}){

  const loggedIn  = useSelector(store=>store.user.loggedIn)
  const dispath = useDispatch()
  const { pathname } = useLocation();

  const mainClassName = (pathname === PATH_PROFILE)
  ? `${styles.main_profile}`
  : `${styles.main}`;
  const activeClassLink = `${styles.link} text text_type_main-medium`;
  const inActiveClassLink = `${styles.link} ${styles.link_inactive} text text_type_main-medium`;

  const handleLogout = (e) => {
    e.preventDefault();
    dispath(logoutRequestAction());
    if(loggedIn){
      deleteCookie(ACCESS_TOKEN);
      localStorage.removeItem(REFRESH_TOKEN);
      dispath(deleteUserAction());
    }
  };

  return(
    <section className={mainClassName}>
      {
        pathname === PATH_PROFILE
        ?
        <ul className={styles.nav}>
          <NavLink
            to={PATH_PROFILE}
            className={({ isActive }) =>
              isActive ? activeClassLink : inActiveClassLink}>
              {PROFILE}
          </NavLink>
          <NavLink
            to={PATH_NOT_FOUND}
            className={({ isActive }) =>
              isActive ? activeClassLink : inActiveClassLink}>
              {ORDER_HISTORY}
          </NavLink>
          <NavLink
            to={PATH_NOT_FOUND}
            onClick={handleLogout}
            className={({ isActive }) =>
              isActive ? activeClassLink : inActiveClassLink}>
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
