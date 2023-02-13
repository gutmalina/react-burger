import styles from "./scroll-bar.module.css";
import { scrollBarConstants } from "../../utils/constants";
import { scrollBarType, childrenType } from "../../types/index";

function ScrollBar({ typeScroll, children }) {
  const { TYPE_INGREDIENTS } = scrollBarConstants;
  const classNameScrollBar =
    typeScroll === TYPE_INGREDIENTS
      ? `${styles.scroll_bar} ${styles.scroll_bar_ingredients} custom-scroll`
      : `${styles.scroll_bar} ${styles.scroll_bar_details} custom-scroll`;

  return <div className={classNameScrollBar}>{children}</div>;
}

ScrollBar.propTypes = {
  typeScroll: scrollBarType.isRequired,
  children: childrenType.isRequired,
};

export default ScrollBar;
