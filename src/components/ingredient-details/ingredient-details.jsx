import styles from './ingredient-details.module.css';
import {
  MODAL_CARD_CALORIES,
  MODAL_CARD_PROTEINS,
  MODAL_CARD_FAT,
  MODAL_CARD_CARBOHYDRATES
} from '../../utils/constants';
import { cardIngredientType } from '../../types';

function IngredientDetails({onCard}){
  const {
    name,
    image,
    calories,
    proteins,
    fat,
    carbohydrates} = onCard;

  return(
    <>
      <img
        className={`${styles.image} mt-2 mb-5`}
        src={image}
        alt={name}
      />
      <p className={`${styles.subtitle} text text_type_main-medium mb-4`}
        >{name}
      </p>
      <ul className={styles.group}>
        <li className={styles.item}>
          <h4 className='text text_type_main-default text_color_inactive mb-1'>
            {MODAL_CARD_CALORIES}
          </h4>
          <p className='text text_type_digits-default text_color_inactive'>
            {calories}
          </p>
        </li>
        <li className={styles.item}>
          <h4 className='text text_type_main-default text_color_inactive mb-1'>
            {MODAL_CARD_PROTEINS}
          </h4>
          <p className='text text_type_digits-default text_color_inactive'>
            {proteins}
          </p>
        </li>
        <li className={styles.item}>
          <h4 className='text text_type_main-default text_color_inactive mb-1'>
            {MODAL_CARD_FAT}
          </h4>
          <p className='text text_type_digits-default text_color_inactive'>
            {fat}
          </p>
        </li>
        <li className={styles.item}>
          <h4 className='text text_type_main-default text_color_inactive mb-1'>
            {MODAL_CARD_CARBOHYDRATES}
          </h4>
          <p className='text text_type_digits-default text_color_inactive'>
            {carbohydrates}
          </p>
        </li>
      </ul>
    </>
  );
};

IngredientDetails.propType = {
  onCard: cardIngredientType.isRequired
};

export default IngredientDetails;
