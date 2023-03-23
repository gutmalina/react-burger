import { FC, PropsWithChildren, SyntheticEvent } from "react";
import { useLocation, NavLink } from "react-router-dom";
import NavForm from "../nav-form";
import { deleteCookie } from "../../utils/cookie";
import styles from "./page-overlay.module.css";
import { useDispatch, useSelector } from "../../services/hooks";
import {
  pathConstants,
  tokenConstants,
  textConstants,
  linkConstants,
} from "../../utils/constants";
import { logoutAction } from "../../services/actions/logout/logout";
import { TPage } from "../../utils/types";

const PageOverlay: FC<PropsWithChildren<TPage>> = ({ textTitle, children }) => {
  const { ACCESS_TOKEN, REFRESH_TOKEN, PASSWORD } = tokenConstants;
  const { PROFILE_PAGE_SUBTITLE } = textConstants;
  const { PROFILE_LINK, ORDER_HISTORY_LINK, EXIT } = linkConstants;
  const { PROFILE, ORDER_HISTORY, SIGN_IN, FEED } = pathConstants;

  const isLoggedIn = useSelector((store) => store.user.isLoggedIn);
  const message = useSelector((store) => store.wsReducer.message);
  const dispath = useDispatch();
  const { pathname } = useLocation();

  const mainClassName = () => {
    if (pathname === PROFILE || pathname === ORDER_HISTORY) {
      return `${styles.main_profile}`;
    } else if (pathname.includes(FEED)) {
      if (!message) {
        return `${styles.main_profile} ${styles.main_preloader}`;
      }
      return `${styles.main_profile}`;
    } else {
      return `${styles.main}`;
    }
  };
  const activeClassLink = `${styles.link} text text_type_main-medium`;
  const inActiveClassLink = `${styles.link} ${styles.link_inactive} text text_type_main-medium`;

  /** выход из системы и удаление данных  */
  const handleLogout = (e: SyntheticEvent<HTMLElement>) => {
    e.preventDefault();
    dispath(logoutAction());
    if (isLoggedIn) {
      deleteCookie(ACCESS_TOKEN);
      localStorage.removeItem(REFRESH_TOKEN);
      localStorage.removeItem(PASSWORD);
    }
  };

  return (
    <section className={mainClassName()}>
      {pathname === PROFILE || pathname === ORDER_HISTORY ? (
        <ul className={styles.nav}>
          <NavLink
            to={PROFILE}
            end
            className={({ isActive }) =>
              isActive ? activeClassLink : inActiveClassLink
            }
          >
            {PROFILE_LINK}
          </NavLink>
          <NavLink
            to={ORDER_HISTORY}
            className={({ isActive }) =>
              isActive ? activeClassLink : inActiveClassLink
            }
          >
            {ORDER_HISTORY_LINK}
          </NavLink>
          <NavLink
            to={SIGN_IN}
            onClick={handleLogout}
            className={({ isActive }) =>
              isActive ? activeClassLink : inActiveClassLink
            }
          >
            {EXIT}
          </NavLink>
          <p
            className={`${styles.subtitle} text text_type_main-default text_color_inactive mt-20`}
          >
            {PROFILE_PAGE_SUBTITLE}
          </p>
        </ul>
      ) : (
        <h1 className="text text_type_main-medium mb-4">{textTitle}</h1>
      )}
      {children}
      <NavForm />
    </section>
  );
};

export default PageOverlay;
