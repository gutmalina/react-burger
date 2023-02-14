import { NavLink } from "react-router-dom";
import styles from "./nav-tab.module.css";
import { textType, childrenType } from "../../types/index";

function NavTab({ onTo, textSpan, children }) {
  const activeClassLink = `${styles.link} text text_type_main-default`;
  const inActiveClassLink = `${styles.link} ${styles.link_inactive} text text_type_main-default text_color_inactive`;

  return (
    <NavLink
      to={onTo}
      className={({ isActive }) =>
        isActive ? activeClassLink : inActiveClassLink
      }
    >
      <li className={styles.nav_item}>
        {children}
        <span>{textSpan}</span>
      </li>
    </NavLink>
  );
}

NavTab.propTypes = {
  onTo: textType,
  textSpan: textType,
  children: childrenType.isRequired,
};

export default NavTab;
