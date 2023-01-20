import styles from './burger-ingredients.module.css';
import TabBar from '../tag-bar/tag-bar';
import ScrollBar from '../scroll-bar/scroll-bar';
import { SCROLL_BAR_TYPE_INGREDIENTS } from '../../utils/constants';
import { functionType } from '../../types/index';
import ScrollBarIngredients from '../scroll-bar-ingredients/scroll-bar-ingredients';

function BurgerIngredients({ setCardIngredient }){

  return(
    <div
      className={styles.container}>
      <TabBar/>
      <ScrollBar
        typeScroll={SCROLL_BAR_TYPE_INGREDIENTS}>
          {
            <ScrollBarIngredients
              setCardIngredient={setCardIngredient}/>
          }
      </ScrollBar>
    </div>
  );
};

BurgerIngredients.protoTypes = {
  setCardIngredient: functionType.isRequired
};

export default BurgerIngredients;
