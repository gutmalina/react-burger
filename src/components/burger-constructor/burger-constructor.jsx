import { useContext, useEffect, useState } from 'react';
import { BurgerConstructorContext } from '../../contexts/BurgerConstructorContext';
import styles from './burger-constructor.module.css';
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
import { functionType } from '../../types/index';
import ScrollBarConstructor from '../scroll-bar-constructor/scroll-bar-constructor';

function BurgerConstructor({
  onOpenModal,
  setIsIdIngredients}){

  const ingredientsAll = useContext(BurgerConstructorContext);
  const [isBun, setIsBun] = useState([]);
  const [isInsideBun, setIsInsideBun] = useState([]);
  const [isBurgerSelected, setIsBurgerSelected] = useState([]);
  const [isResult, setIsResult] = useState(0);
  const arrPrice = [];
  const arrId = [];

  const handleDataBerger = () =>{
    for(let i=0; i < isBurgerSelected.length; i++){
      arrPrice.push(isBurgerSelected[i].price);
      arrId.push(isBurgerSelected[i]._id)
    }
    return (arrPrice, arrId)
  };

  useEffect(()=>{
    const arrAllBun = ingredientsAll.filter((item=>item.type === 'bun'));
    const bun = {...arrAllBun[Math.floor(Math.random() * arrAllBun.length)]};
    const arrInsideBun = ingredientsAll.filter((item=>item.type !== 'bun'));
    const inside = arrInsideBun.filter((item)=>Math.random() > 0.5);
    const burger = inside.concat(bun, bun)
    setIsBun(bun)
    setIsInsideBun(inside);
    setIsBurgerSelected(burger);
  }, [ingredientsAll]);

  useEffect(()=>{
    handleDataBerger();
    const result = arrPrice.reduce((pre, sum)=>{ return pre + sum}, 0);
    setIsResult(result);
    setIsIdIngredients(arrId);
  }, [isBurgerSelected]);


  return(
    <div className={styles.container}>
      <ConstructorElement
        type="top"
        isLocked={true}
        text={isBun.name}
        price={isBun.price}
        thumbnail={isBun.image}
        extraClass={`${styles.element} mb-4`}
      />
      <ScrollBar
        typeScroll={SCROLL_BAR_TYPE_DETAILS_ORDER}>
          {
            <ScrollBarConstructor ingredientInside={isInsideBun}/>
          }
      </ScrollBar>
      <ConstructorElement
        type="bottom"
        isLocked={true}
        text={isBun.name}
        price={isBun.price}
        thumbnail={isBun.image}
        extraClass={`${styles.element} mt-1 mb-10`}
      />
      <article className={`${styles.order} mr-4`}>
        <span
          className={`${styles.result} text text_type_digits-medium`}>
            {isResult || 0}
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
  onOpenModal: functionType.isRequired,
  setIsIdIngredients: functionType.isRequired
};

export default BurgerConstructor;
