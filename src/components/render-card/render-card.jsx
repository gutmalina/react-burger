import styles from './render-card.module.css';
import Card from '../card/card';
import PropTypes from 'prop-types';

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
            <Card {...card} key={card._id}/>
          ))
        }
      </section>
    </div>
  );
};

RenderCard.propTypes = {
  typeGroup: PropTypes.string.isRequired
}

export default RenderCard;
