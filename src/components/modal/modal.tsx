import { useCallback, useEffect, FC, PropsWithChildren } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./modal.module.css";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { closeOrder } from "../../services/actions/order";
import { pathConstants } from "../../utils/constants";
import { TModal } from "../../utils/types";

const Modal: FC<PropsWithChildren<TModal>> = ({ isOpenModal, textTitle, children }) => {
  const modalRoot = document.querySelector("#root-modal") as Element;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const order = useSelector((store: any) => store.order.order);
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

  /** закрыть модальное окно по ESC*/
  useEffect(() => {
    const handleClose = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        handleCloseModal();
      }
    };
    document.addEventListener("keydown", handleClose);

    return () => {
      document.removeEventListener("keydown", handleClose);
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
      <ModalOverlay onClose={handleCloseModal}/>
    </div>,
    modalRoot
  );
};

export default Modal;
