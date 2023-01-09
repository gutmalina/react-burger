import { createPortal } from 'react-dom';
import styles from './modal.module.css';
import ModalOverlay from '../modal-overlay/modal-overlay';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useEffect, useRef } from 'react';
import {
  boolType,
  functionType,
  textType,
  childrenType
} from '../../types';

function Modal({
  isModal,
  onClose,
  textTitle,
  children
}){
  const modalRoot = document.querySelector('#root-modal');
  const classPopup = isModal ?
    `${styles.popup} ${styles.popup_opened}` :
    `${styles.popup}`;
  const refOverlay = useRef();

  /** закрытие модального окна по ESC и overlay */
  useEffect(()=>{
    const handleClose = (e) =>{
      if(e.code === 'Escape' || e.target === refOverlay.current){
        onClose()
      };
    };
    document.addEventListener('keydown', handleClose);
    document.addEventListener( 'click', handleClose);

    return ()=>{
      document.removeEventListener('keydown', handleClose)
      document.removeEventListener( 'click', handleClose);
    };
  }, [isModal]);

  return createPortal(
    <div className={classPopup}>
      <div className={styles.wrapper}>
        <article className={styles.title}>
          <h3 className="text text_type_main-large">
            {textTitle}
          </h3>
          <div className={styles.btn}>
            <CloseIcon
              type="primary"
              onClick={onClose}/>
          </div>
        </article>
        {children}
      </div>
      <ModalOverlay
        ref={refOverlay}/>
    </div>,
    modalRoot
  );
};

createPortal.protoTypes = {
  isModal: boolType.isRequired,
  onClose: functionType.isRequired,
  textTitle: textType.isRequired,
  children: childrenType.isRequired
}

export default Modal;
