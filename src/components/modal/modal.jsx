import styles from './modal.module.css';
import ModalOverlay from '../modal-overlay/modal-overlay';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientDetails from '../ingredient-details/ingredient-details';
import OrderDetails from '../order-details/order-details';

function Modal(){

  return (
    <div className={styles.popup}>
      <div className={styles.wrapper}>
        <article className={styles.title}>
          <h3 className="text text_type_main-large">Детали ингредиента</h3>
          <CloseIcon type="primary" />
        </article>
        <IngredientDetails/>
        {/* <OrderDetails/> */}
      </div>
      <ModalOverlay/>
    </div>
  );
};

export default Modal;
