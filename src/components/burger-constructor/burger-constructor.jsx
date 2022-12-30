import styles from './burger-constructor.module.css';
import img from '../../images/bun-02.svg';
import {
  ConstructorElement,
  CurrencyIcon,
  Button } from "@ya.praktikum/react-developer-burger-ui-components";
import ScrollBar from '../scroll-bar/scroll-bar';

function BurgerConstructor(){
  return(
    <div className={styles.container}>
      <ConstructorElement
        type="top"
        isLocked={true}
        text="Краторная булка N-200i (верх)"
        price={200}
        thumbnail={img}
        extraClass='ml-8 mb-4'
      />
      <ScrollBar
        typeScroll='detailsOrder'
      />
      <ConstructorElement
        type="bottom"
        isLocked={true}
        text="Краторная булка N-200i (низ)"
        price={200}
        thumbnail={img}
        extraClass='mt-4 mb-10 ml-8'
      />
      <article className={styles.order}>
        <span
          className={`${styles.result} text text_type_digits-medium`}
          >610
        </span>
        <CurrencyIcon
          type="primary"
        />
        <Button
          htmlType="button"
          type="primary"
          size="large"
          extraClass='ml-10'
          >Оформить заказ
        </Button>
      </article>
    </div>
  );
};

export default BurgerConstructor;
