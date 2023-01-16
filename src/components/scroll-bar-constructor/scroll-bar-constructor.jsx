import styles from './scroll-bar-constructor.module.css';
import {
  ConstructorElement,
  DragIcon
} from "@ya.praktikum/react-developer-burger-ui-components";

function ScrollBarConstructor({ingredientInside}){
  return (
    <>
      {
        ingredientInside.map((card) => (
          <div
            {...card}
            key={card._id}
            className={styles.details_container}>
            <div className={styles.icon}>
              <DragIcon type="primary" />
            </div>
            <ConstructorElement
              text={card.name}
              price={card.price}
              thumbnail={card.image}
              extraClass='mb-4 ml-2'
            />
          </div>
        ))
      }
    </>
  );
};

export default ScrollBarConstructor;
