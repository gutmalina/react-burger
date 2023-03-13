import { FC, PropsWithChildren } from "react";
import styles from "./scroll-bar.module.css";
import { scrollBarConstants } from "../../utils/constants";
import { TTypeScroll } from "../../utils/types";

const ScrollBar: FC<PropsWithChildren<TTypeScroll>> = ({ typeScroll, children }) => {
  const { TYPE_INGREDIENTS, TYPE_DETAILS_ORDER, TYPE_ORDERS } = scrollBarConstants;

  const classNameScrollBar = () =>{
    switch(typeScroll) {
      case TYPE_INGREDIENTS: {
        return `${styles.scroll_bar} ${styles.scroll_bar_ingredients} custom-scroll`
      }
      case TYPE_DETAILS_ORDER: {
        return `${styles.scroll_bar} ${styles.scroll_bar_details} custom-scroll`
      }
      case TYPE_ORDERS: {
        return `${styles.scroll_bar} ${styles.scroll_bar_orders} custom-scroll`
      }
      default:
        return;
    }
  }

  return <div className={classNameScrollBar()}>{children}</div>;

};

export default ScrollBar;
