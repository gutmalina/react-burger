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
  isOpenModal,
  isCloseModal,
  textTitle,
  children
}){
  const modalRoot = document.querySelector('#root-modal');
  const classPopup = isOpenModal ?
    `${styles.popup} ${styles.popup_opened}` :
    `${styles.popup}`;
  const refOverlay = useRef();

  /** закрыть модальное окно */
  const handleCloseModal = () => {
    isCloseModal('')
  };

  /** закрыть модальное окно по ESC и overlay */
  useEffect(()=>{
    const handleClose = (e) =>{
      if(e.code === 'Escape' || e.target === refOverlay.current){
        handleCloseModal()
      };
    };
    document.addEventListener('keydown', handleClose);
    document.addEventListener( 'click', handleClose);

    return ()=>{
      document.removeEventListener('keydown', handleClose)
      document.removeEventListener( 'click', handleClose);
    };
  }, [isOpenModal]);

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
              onClick={handleCloseModal}/>
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
  isOpenModal: boolType.isRequired,
  isCloseModal: functionType.isRequired,
  textTitle: textType.isRequired,
  children: childrenType.isRequired
};

export default Modal;
