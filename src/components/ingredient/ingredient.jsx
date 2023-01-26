import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDrag } from 'react-dnd/dist/hooks';
import {
  CurrencyIcon,
  Counter
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './ingredient.module.css';
import { addIngredient } from '../../services/actions/actions';
import { ingredientsType } from '../../types/index';

function Ingredient({ card }){
  const { name, price, image } = card;
  const [count, setCount] = useState(0);
  const burger = useSelector(store=>store.burger)
  const dispatch = useDispatch()

  /** перетаскиваемый элемент - ингедиент в бургер */
  const [, dragRef] = useDrag({
    type: card.type,
    item: card
  });

  const handleCountOrderIngredient = useMemo(()=>{
    const arrBurger  = burger.filling.concat(burger.bun, burger.bun);
    const arrId = arrBurger.map(a=>a._id);
    setCount(arrId.filter(a=>a === card._id).length);
  }, [burger]);

  const countClass = count ? '': styles.counter_hidden;

  /** открыть модальное окно - детали ингредиента */
  const postDataCardOpenModal=(e)=>{
    e.stopPropagation()
    dispatch(addIngredient(card))
  };

  return(
    <article
      onClick={postDataCardOpenModal}
      className={styles.card}
      ref={dragRef}>
      <Counter
        count={count}
        size="default"
        extraClass={countClass}
      />
      <img
        className={`${styles.image} mr-4 mb-2 ml-4`}
        src={image}
        alt={name}
      />
      <div className={`${styles.price} mb-2`}>
        <span className='text text_type_digits-default'>
          {price}
        </span>
        <CurrencyIcon
          type="primary"
        />
      </div>
      <p className={`${styles.subtitle} text text_type_main-default`}>
        {name}
      </p>
    </article>
  );
};

Ingredient.propTypes = {
  card: ingredientsType.isRequired
};

export default Ingredient;



