import styles from './render-card.module.css';
import Card from '../card/card';
import {
  textType,
  arrayIngredientsType,
  functionType
} from '../../types/index';

function RenderCard({
  onOpenModal,
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
            <Card
              onOpenModal={onOpenModal}
              card={card}
              key={card._id}/>
          ))
        }
      </section>
    </div>
  );
};

RenderCard.propTypes = {
  onOpenModal: functionType.isRequired,
  groupIngredients: arrayIngredientsType.isRequired,
  typeGroup: textType.isRequired
};

export default RenderCard;
