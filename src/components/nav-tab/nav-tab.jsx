import styles from './nav-tab.module.css';
import { BUTTON_ICON_BURGER } from '../../utils/constants';

function NavTab({textSpan, children}){
  const classNameSpan = (textSpan === BUTTON_ICON_BURGER) ?
  'text text_type_main-default' :
  'text text_type_main-default text_color_inactive';

  return(
    <li className={styles.nav_item}>
      {children}
      <span className={classNameSpan}>
        {textSpan}
      </span>
    </li>
  );
};

export default NavTab;
