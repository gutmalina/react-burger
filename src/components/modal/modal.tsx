import { useCallback, useEffect, FC, PropsWithChildren } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./modal.module.css";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { pathConstants } from "../../utils/constants";
import { TModal } from "../../utils/types";
import { useSelector } from "../../services/hooks";

const modalRoot = document.querySelector("#root-modal") as Element;

const Modal: FC<PropsWithChildren<TModal>> = ({
  onClose,
  textTitle,
  children,
}) => {
  const navigate = useNavigate();
  const { HOME } = pathConstants;
  const isPreloader = useSelector((store) => store.order.isPreloader);

  /** закрыть модальное окно */
  const onCloseModal = useCallback(() => {
    if (onClose) {
      onClose();
    } else {
      navigate(HOME);
    }
  }, [onClose, HOME, navigate]);

  /** закрыть модальное окно по ESC*/
  useEffect(() => {
    const handleClose = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        onCloseModal();
      }
    };
    document.addEventListener("keydown", handleClose);

    return () => {
      document.removeEventListener("keydown", handleClose);
    };
  }, [onCloseModal]);

  const classNameWrapper = isPreloader
    ? `${styles.wrapper} ${styles.wrapper_preloader}`
    : `${styles.wrapper}`;

  return createPortal(
    <>
      <div className={classNameWrapper}>
        {!isPreloader ? (
          <article className={styles.title}>
            <h3 className="text text_type_main-large">{textTitle}</h3>
            <div className={styles.btn}>
              <CloseIcon type="primary" onClick={onCloseModal} />
            </div>
          </article>
        ) : null}
        {children}
      </div>
      <ModalOverlay onClose={onCloseModal} />
    </>,
    modalRoot!
  );
};

export default Modal;
