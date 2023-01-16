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
import {
  functionType
} from '../../types/index';
import ScrollBarConstructor from '../scroll-bar-constructor/scroll-bar-constructor';
import { keyboard } from '@testing-library/user-event/dist/keyboard';

function BurgerConstructor({
  onOpenModal,
  setIsIdIngredients}){
  const ingredientsAll = useContext(BurgerConstructorContext);

  const ingredientsBun = ingredientsAll.filter((item=>item.type === 'bun'));
  const ingredientBunRandom = {...ingredientsBun[Math.floor(Math.random() * ingredientsBun.length)]};
  const ingredientInside = (ingredientsAll.filter((item=> item.type !== 'bun'))).filter((item) => Math.random() > 0.5);
  const arr = ingredientInside.concat(ingredientBunRandom, ingredientBunRandom);
  const [isRenderIngredients, setIsRenderIngredients] = useState([]);
  const [isResult, setIsResult] = useState(0);

  const res = [];
  const id = []

  const fun = ()=>{

    for(let i=0; i<arr.length; i++){
      res.push(arr[i].price);
      id.push(arr[i]._id)
    }
    return (res, id)
  }

  useEffect(()=>{
    setIsRenderIngredients(arr);
    fun()
    setIsResult(res.reduce((pre, sum)=>{ return pre + sum}, 0));
    setIsIdIngredients(id)
  }, [ingredientsAll])


  return(
    <div className={styles.container}>
      <ConstructorElement
        name="bun"
        type="top"
        isLocked={true}
        text={ingredientBunRandom.name}
        price={ingredientBunRandom.price}
        thumbnail={ingredientBunRandom.image}
        extraClass={`${styles.element} mb-4`}
      />
      <ScrollBar
        typeScroll={SCROLL_BAR_TYPE_DETAILS_ORDER}>
          {
            <ScrollBarConstructor ingredientInside={ingredientInside}/>
          }
      </ScrollBar>
      <ConstructorElement
        name="bun"
        type="bottom"
        isLocked={true}
        text={ingredientBunRandom.name}
        price={ingredientBunRandom.price}
        thumbnail={ingredientBunRandom.image}
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
  onOpenModal: functionType.isRequired
};

export default BurgerConstructor;
