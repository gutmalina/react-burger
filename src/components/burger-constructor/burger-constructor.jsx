import styles from './burger-constructor.module.css';
import img from '../../images/bun-02.svg';
import {
  ConstructorElement,
  CurrencyIcon,
  Button
} from "@ya.praktikum/react-developer-burger-ui-components";
import ScrollBar from '../scroll-bar/scroll-bar';
import {
  SCROLL_BAR_TYPE_DETAILS_ORDER,
  TEXT_BUTTON_MAKE_ORDER
} from '../../utils/constants';
import {
  arrayDetailsOrderType,
  functionType
} from '../../types/index';
import ScrollBarConstructor from '../scroll-bar-constructor/scroll-bar-constructor';

function BurgerConstructor({
  onOpenModal,
  arrDetailsOrder}){

  return(
    <div className={styles.container}>
      <ConstructorElement
        type="top"
        isLocked={true}
        text="Краторная булка N-200i (верх)"
        price={200}
        thumbnail={img}
        extraClass={`${styles.element} mb-4`}
      />
      <ScrollBar
        typeScroll={SCROLL_BAR_TYPE_DETAILS_ORDER}>
          {
            <ScrollBarConstructor
              arrDetailsOrder={arrDetailsOrder}/>
          }
      </ScrollBar>
      <ConstructorElement
        type="bottom"
        isLocked={true}
        text="Краторная булка N-200i (низ)"
        price={200}
        thumbnail={img}
        extraClass={`${styles.element} mt-1 mb-10`}
      />
      <article className={`${styles.order} mr-4`}>
        <span
          className={`${styles.result} text text_type_digits-medium`}>
            610
        </span>
        <CurrencyIcon
          type="primary"
        />
        <Button
          htmlType="button"
          type="primary"
          size="large"
          extraClass={styles.btn}
          onClick={onOpenModal}>
            {TEXT_BUTTON_MAKE_ORDER}
        </Button>
      </article>
    </div>
  );
};

BurgerConstructor.protoTypes = {
  arrDetailsOrder: arrayDetailsOrderType.isRequired,
  onOpenModal: functionType.isRequired
};

export default BurgerConstructor;
