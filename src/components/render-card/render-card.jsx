import styles from './render-card.module.css';
import Card from '../card/card';
import {
  textType,
  arrayIngredientsType
} from '../../types/index';

function RenderCard({
  groupIngredients,
  typeGroup
}){
  return(
    <div className='mb-10'>
      <p className='text text_type_main-medium mb-6'>
        {typeGroup}
      </p>
      <section className={`${styles.cards} ml-4 mr-4`}>
        {
          groupIngredients.map((card) => (
            <Card card={card} key={card._id}/>
          ))
        }
      </section>
    </div>
  );
};

RenderCard.propTypes = {
  typeGroup: textType.isRequired,
  groupIngredients: arrayIngredientsType.isRequired
}

export default RenderCard;
