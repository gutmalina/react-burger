import styles from './card.module.css';
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

function Card({name, price, image}){
  return(
    <article className={styles.card}>
      <img className={`${styles.image} mt-6 mr-4 mb-1 ml-4`} src={image} alt={name} />
      <div className={`${styles.price} mb-1`}>
        <span
          className='text text_type_main-default'
          >{price}
        </span>
        <CurrencyIcon
          type="primary"
        />
      </div>
      <p className={`${styles.subtitle} text text_type_main-default`}>{name}</p>
    </article>
  );
};

export default Card;



