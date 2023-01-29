import styles from './nav-tab.module.css';
import { BUTTON_ICON_BURGER } from '../../utils/constants';
import {
  textType,
  childrenType
} from '../../types/index';

function NavTab({
  type,
  textSpan,
  children}){

  const classNameItem = (type)
  ? styles.nav_logo
  : styles.nav_item ;
  const classNameSpan = (textSpan === BUTTON_ICON_BURGER)
  ? `${styles.nav_span} text text_type_main-default`
  : `${styles.nav_span} text text_type_main-default text_color_inactive`;

  return(
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a
      className={styles.nav_link}
      href='#'>
      <li className={classNameItem}>
        {children}
        <span className={classNameSpan}>
          {textSpan}
        </span>
      </li>
    </a>
  );
};

NavTab.propTypes = {
  type: textType,
  textSpan: textType,
  children: childrenType.isRequired
};

export default NavTab;
