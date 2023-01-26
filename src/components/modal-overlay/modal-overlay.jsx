import { forwardRef } from 'react';
import styles from './modal-overlay.module.css';

const ModalOverlay= forwardRef(({}, ref) => {
  return(
    <div
      ref={ref}
      className={styles.overlay}>
    </div>
  )
});

export default ModalOverlay;
