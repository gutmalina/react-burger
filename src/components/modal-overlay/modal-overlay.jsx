import styles from './modal-overlay.module.css';
import { forwardRef } from 'react';

const ModalOverlay= forwardRef(( {}, ref) => {
  return(
    <div
      ref={ref}
      className={styles.overlay}>
    </div>
  )
});

export default ModalOverlay;
