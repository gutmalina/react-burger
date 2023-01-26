import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDrop } from 'react-dnd/dist/hooks/useDrop';
import {
  ConstructorElement,
  CurrencyIcon,
  Button
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './burger-constructor.module.css';
import ScrollBar from '../scroll-bar/scroll-bar';
import ScrollBarConstructor from '../scroll-bar-constructor/scroll-bar-constructor';
import {
  getOrderAction,
  addBurgerBun,
  addBurgerFilling,
  sumOrder
} from '../../services/actions/actions';
import {
  SCROLL_BAR_TYPE_DETAILS_ORDER,
  TEXT_BUTTON_MAKE_ORDER,
  FILTER_BUN,
  FILTER_MAIN,
  FILTER_SAUCE
} from '../../utils/constants';

function BurgerConstructor(){
  const {burger, summed} = useSelector(store=>({
    burger: store.burger,
    summed: store.sum
  }));
  const dispatch = useDispatch();

  /** целевой контейнер для создания бургера */
  const [, dropTargetRef] = useDrop({
    accept: [FILTER_BUN, FILTER_MAIN, FILTER_SAUCE],
    drop(card) {
      card.type === FILTER_BUN
      ? dispatch(addBurgerBun(card))
      : dispatch(addBurgerFilling(card));
    },
  });

  /** получить ID ингридиентов бургера */
  const handleIdIngredient = useMemo(()=>{
    const arrBurger  = burger.filling.concat(burger.bun, burger.bun)
    let result = arrBurger.map(a => a._id);
    return result
  }, [burger]);


  const resultArr = (arr)=>{
    return arr.map(a=>a.price).reduce((acc, sum)=>{return acc+sum}, 0)
  }

  /** получить сумму заказа */
  const handleResult = useMemo((funcsumm)=>{
    let result
    if(!Object.keys(burger.bun).length){
      result = resultArr(burger.filling)
    } else {
      const arrBurger  = burger.filling.concat(burger.bun, burger.bun)
      result = resultArr(arrBurger)
    }
    return result
  }, [burger]);

  useEffect(()=>{
    dispatch(sumOrder(handleResult))
  }, [burger, dispatch, handleResult]);

   /** передать заказ и получить номер заказа */
  const getNumberOrder = () =>{
    dispatch(getOrderAction(handleIdIngredient))
  };

  return(
    <div
      ref={dropTargetRef}
      className={styles.container}>
        {
          Object.keys(burger.bun).length
          ?
          <ConstructorElement
            type="top"
            isLocked={true}
            text={burger.bun.name}
            price={burger.bun.price}
            thumbnail={burger.bun.image}
            extraClass={`${styles.element} mb-4`}
          />
          :
          <ConstructorElement
            type="top"
            text='Выберите булку'
            extraClass={`${styles.element_default} mb-4`}
          />
        }
      <ScrollBar
        typeScroll={SCROLL_BAR_TYPE_DETAILS_ORDER}>
          {
            burger.filling.length
            ?
            <ScrollBarConstructor
              ingredientInside={burger.filling || []}
            />
            :
            <ConstructorElement
              text='Выберите начинку'
              extraClass={`${styles.element_default} mb-4`}
            />
          }
      </ScrollBar>
      {
        Object.keys(burger.bun).length
        ?
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={burger.bun.name}
          price={burger.bun.price}
          thumbnail={burger.bun.image}
          extraClass={`${styles.element} mt-1 mb-10`}
        />
        :
        <ConstructorElement
          type="bottom"
          text='Выберите булку'
          extraClass={`${styles.element_default} mt-1 mb-10`}
        />
      }

      <article className={`${styles.order} mr-4`}>
        <span
          className={`${styles.result} text text_type_digits-medium`}>
            {summed || 0}
        </span>
        <CurrencyIcon
          type="primary"
        />
        <Button
          htmlType="button"
          type="primary"
          size="large"
          extraClass={styles.btn}
          onClick={getNumberOrder}>
            {TEXT_BUTTON_MAKE_ORDER}
        </Button>
      </article>
    </div>
  );
};

export default BurgerConstructor;
