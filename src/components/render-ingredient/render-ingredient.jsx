import { forwardRef } from 'react';
import styles from './render-ingredient.module.css';
import Ingredient from '../ingredient/ingredient';
import {
  textType,
  arrayIngredientsType
} from '../../types/index';

const RenderIngredient = forwardRef(({
  groupIngredients,
  typeGroup},
  ref) => {

  return(
    <div className='mb-10'>
      <p

        className='text text_type_main-medium mb-6'>
        {typeGroup}
      </p>
      <section ref={ref} className={`${styles.cards} ml-4 mr-4`}>
        {
          groupIngredients.map((card) => (
            <Ingredient
              card={card}
              key={card._id}/>
          ))
        }
      </section>
    </div>
  );
});

RenderIngredient.propTypes = {
  groupIngredients: arrayIngredientsType.isRequired,
  typeGroup: textType.isRequired
};

export default RenderIngredient;
