import styles from './card.module.css';
import {
  CurrencyIcon,
  Counter
} from "@ya.praktikum/react-developer-burger-ui-components";
import { cardType } from '../../types/index';

function Card({card}){
  const {name, price, image} = card;

  return(
    <article className={styles.card}>
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
        <span
          className='text text_type_digits-default'
          >{price}
        </span>
        <CurrencyIcon
          type="primary"
        />
      </div>
      <p className={`${styles.subtitle} text text_type_main-default`}
        >{name}
        </p>
    </article>
  );
};

Card.propTypes = {
  card: cardType.isRequired
}

export default Card;



