import { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./modal.module.css";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { closeOrder } from "../../services/actions/order";
import { pathConstants } from "../../utils/constants";
import { boolType, textType, childrenType } from "../../types";

function Modal({ isOpenModal, textTitle, children }) {
  const modalRoot = document.querySelector("#root-modal");
  const refOverlay = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const order = useSelector((store) => store.order.order);
  const { HOME } = pathConstants;

  /** показать модальное окно */
  const classPopup = isOpenModal
    ? `${styles.popup} ${styles.popup_opened}`
    : `${styles.popup}`;
    
  /** закрыть модальное окно */
  const handleCloseModal = useCallback(() => {
    if (!order) {
      navigate(HOME);
    } else {
      dispatch(closeOrder());
    }
  }, [dispatch, order, navigate, HOME]);

  /** закрыть модальное окно по ESC и overlay */
  useEffect(() => {
    const handleClose = (e) => {
      if (e.code === "Escape" || e.target === refOverlay.current) {
        handleCloseModal();
      }
    };
    document.addEventListener("keydown", handleClose);
    document.addEventListener("click", handleClose);

    return () => {
      document.removeEventListener("keydown", handleClose);
      document.removeEventListener("click", handleClose);
    };
  }, [isOpenModal, handleCloseModal]);

  return createPortal(
    <div className={classPopup}>
      <div className={styles.wrapper}>
        <article className={styles.title}>
          <h3 className="text text_type_main-large">{textTitle}</h3>
          <div className={styles.btn}>
            <CloseIcon type="primary" onClick={handleCloseModal} />
          </div>
        </article>
        {children}
      </div>
      <ModalOverlay ref={refOverlay} />
    </div>,
    modalRoot
  );
}

createPortal.protoTypes = {
  isOpenModal: boolType.isRequired,
  textTitle: textType.isRequired,
  children: childrenType.isRequired,
};

export default Modal;
