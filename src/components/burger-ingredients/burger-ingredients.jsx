import styles from './burger-ingredients.module.css';
import TabBar from '../tag-bar/tag-bar';
import ScrollBar from '../scroll-bar/scroll-bar';

function BurgerIngredients(){
  return(
    <div className={styles.ingredients}>
      <TabBar/>
      <ScrollBar
        typeScroll='ingredients'
      />
    </div>
  );
};

export default BurgerIngredients;
