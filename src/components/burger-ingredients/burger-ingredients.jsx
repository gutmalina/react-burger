import styles from './burger-ingredients.module.css';
import TabBar from '../tag-bar/tag-bar';
import ScrollBar from '../scroll-bar/scroll-bar';
import { SCROLL_BAR_TYPE_INGREDIENTS } from '../../utils/constants';
import { arrayIngredientsType } from '../../types/index';

function BurgerIngredients({arrIngredients}){
  return(
    <div className={styles.container}>
      <TabBar/>
      <ScrollBar
        typeScroll={SCROLL_BAR_TYPE_INGREDIENTS}
        arrIngredients={arrIngredients}
      />
    </div>
  );
};

BurgerIngredients.protoTypes = {
  arrIngredients: arrayIngredientsType.isRequired
}

export default BurgerIngredients;
