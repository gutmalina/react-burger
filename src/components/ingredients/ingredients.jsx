import styles from './ingredients.module.css';
import { ingredients } from '../../utils/ingredients';
import { typeIngredients } from '../../utils/typeIngredients';
import Card from '../card/card';

const renderBun = (type) => {
  return ingredients.filter((card) => (
    card.type === type
  ))
};

const groupBun = renderBun('bun')
const groupSauce = renderBun('sauce')

// const rn = (arr, key) => {
//   return arr.reduce((newArr, item) => {
//     (newArr[item[key]] = newArr[item[key]] || []).push(item);
//       return newArr;
//   }, {})
// };

// console.log(rn(ingredients, 'type'));



function Ingredients(){
  return(
    <>
      <div className={`${styles.group_ingredients} mb-10`}>
        <p className={`${styles.subtitle_ingredients} text text_type_main-medium mb-6`}>Булки</p>
        <section className={styles.cards}>
          {
            groupBun.map((card) => (
              <Card {...card} key={card._id}/>
            ))
          }
        </section>
      </div>
      <div className={`${styles.group_ingredients} mb-10`}>
        <p className={`${styles.subtitle_ingredients} text text_type_main-medium mb-6`}>Соусы</p>
        <section className={styles.cards}>
          {
            groupSauce.map((card) => (
              <Card {...card} key={card._id}/>
            ))
          }
        </section>
      </div>
    </>
  );
};

export default Ingredients;
