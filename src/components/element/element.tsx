import { FC } from "react";
import styles from "./element.module.css";
import { TElement } from "../../utils/types";
import { elementConstants } from "../../utils/constants";

const Element: FC<TElement> = ({typeElement, typeSelect}) => {
  const { TYPE_ELEMENT_TOP, TYPE_ELEMENT_CENTER, TYPE_ELEMENT_BOTTOM} = elementConstants

  const classNameDiv = () =>{
    switch(typeElement) {
      case TYPE_ELEMENT_TOP: {
        return `${styles.element} ${styles.element_top} text text_type_main-default`
      }
      case TYPE_ELEMENT_CENTER: {
        return `${styles.element} ${styles.element_center} text text_type_main-default`
      }
      case TYPE_ELEMENT_BOTTOM: {
        return `${styles.element} ${styles.element_bottom} text text_type_main-default`
      }
      default:
        return;
    }
  }

  return <div className={classNameDiv()}>{typeSelect}</div>
};

export default Element;
