import { useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './modal.module.css';
import ModalOverlay from '../modal-overlay/modal-overlay';
import { removeIngredient, closeOrder } from '../../services/actions/actions';
import {
  boolType,
  textType,
  childrenType
} from '../../types';

function Modal({
  isOpenModal,
  textTitle,
  children
}){
  const modalRoot = document.querySelector('#root-modal');
  const refOverlay = useRef();
  const dispatch = useDispatch();
  const ingredient = useSelector(store=>store.ingredientDetailsModal.ingredient);
  const classPopup = isOpenModal
  ? `${styles.popup} ${styles.popup_opened}`
  : `${styles.popup}`;

  /** закрыть модальное окно */
  const handleCloseModal = useCallback(() => {
    Object.keys(ingredient).length
    ? dispatch(removeIngredient())
    : dispatch(closeOrder());
  }, [dispatch, ingredient]);

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
  }, [isOpenModal, handleCloseModal]);

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
  textTitle: textType.isRequired,
  children: childrenType.isRequired
};

export default Modal;
