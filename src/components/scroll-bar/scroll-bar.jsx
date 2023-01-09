import styles from './scroll-bar.module.css';
import { SCROLL_BAR_TYPE_INGREDIENTS } from '../../utils/constants';
import {
  scrollBarType,
  childrenType
} from '../../types/index';

function ScrollBar({
  typeScroll,
  children
}){
  const classNameScrollBar = (typeScroll === SCROLL_BAR_TYPE_INGREDIENTS) ?
    `${styles.scroll_bar} ${styles.scroll_bar_ingredients} custom-scroll` :
    `${styles.scroll_bar} ${styles.scroll_bar_details} custom-scroll` ;

  return(
    <div className={classNameScrollBar}>
      {children}
    </div>
  );
};

ScrollBar.propTypes = {
  typeScroll: scrollBarType.isRequired,
  children: childrenType.isRequired
}

export default ScrollBar;
