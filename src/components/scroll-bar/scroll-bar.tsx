import { FC, PropsWithChildren } from "react";
import styles from "./scroll-bar.module.css";
import { scrollBarConstants } from "../../utils/constants";
import { TTypeScroll } from "../../utils/types";

const ScrollBar: FC<PropsWithChildren<TTypeScroll>> = ({ typeScroll, children }) => {
  const { TYPE_INGREDIENTS } = scrollBarConstants;
  const classNameScrollBar =
    typeScroll === TYPE_INGREDIENTS
      ? `${styles.scroll_bar} ${styles.scroll_bar_ingredients} custom-scroll`
      : `${styles.scroll_bar} ${styles.scroll_bar_details} custom-scroll`;

  return <div className={classNameScrollBar}>{children}</div>;
};

export default ScrollBar;
