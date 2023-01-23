import styles from './ingredient.module.css';
import {
  CurrencyIcon,
  Counter
} from "@ya.praktikum/react-developer-burger-ui-components";
import { ingredientsType } from '../../types/index';
import { useDispatch } from 'react-redux';
import { addIngredient } from '../../services/actions/actions';
import { useDrag } from 'react-dnd/dist/hooks';

function Ingredient({ card }){
  const { name, price, image} = card;
  const dispatch = useDispatch()
  const [, dragRef] = useDrag({
    type: 'main',
    item: card.id
  })

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
        count={1}
        size="default"
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



