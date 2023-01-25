import styles from './scroll-bar-constructor.module.css';
import {
  ConstructorElement,
  DragIcon
} from "@ya.praktikum/react-developer-burger-ui-components";
import { arrayIngredientsType } from '../../types/index';
import { useDispatch } from 'react-redux';
import { removeBurgerFilling } from '../../services/actions/actions';

function ScrollBarConstructor({ingredientInside}){
  const dispatch = useDispatch();

  return (
    <>
      {
        ingredientInside.map((card) => (
          <div
            {...card}
            key={card.keyid}
            className={styles.details_container}>
            <div className={styles.icon}>
              <DragIcon type="primary" />
            </div>
            <ConstructorElement
              text={card.name}
              price={card.price}
              thumbnail={card.image}
              extraClass='mb-4 ml-2'
              handleClose={()=>{dispatch(removeBurgerFilling(card.keyid))}}
            />
          </div>
        ))
      }
    </>
  );
};

ScrollBarConstructor.protoTypes = {
  ingredientInside: arrayIngredientsType.isRequired
};

export default ScrollBarConstructor;
