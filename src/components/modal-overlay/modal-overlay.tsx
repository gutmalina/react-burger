import { FC } from "react";
import styles from "./modal-overlay.module.css";
import { TCloseModal } from "../../utils/types";

const ModalOverlay: FC<TCloseModal> = ({onClose}) => {
  return <div className={styles.overlay} onClick={onClose}></div>;
};

export default ModalOverlay;
