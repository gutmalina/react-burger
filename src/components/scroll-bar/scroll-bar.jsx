import styles from './scroll-bar.module.css';
import Ingredients from '../ingredients/ingredients';
import DetailsOrder from '../details-order/details-order';
import { SCROLL_BAR_TYPE_INGREDIENTS } from '../../utils/constants';
import {
  scrollBarType,
  arrayIngredientsType,
  arrayDetailsOrderType
} from '../../types/index';

function ScrollBar({
  typeScroll,
  arrIngredients,
  arrDetailsOrder
}){
  const classNameScrollBar = (typeScroll === SCROLL_BAR_TYPE_INGREDIENTS) ?
    `${styles.scroll_bar} ${styles.scroll_bar_ingredients} custom-scroll` :
    `${styles.scroll_bar} ${styles.scroll_bar_details} custom-scroll` ;

  return(
    <div className={classNameScrollBar}>
      {typeScroll === SCROLL_BAR_TYPE_INGREDIENTS ?
          <Ingredients
          arrIngredients={arrIngredients}
        /> :
          <DetailsOrder
          arrDetailsOrder={arrDetailsOrder}
        />
      }
    </div>
  );
};

ScrollBar.propTypes = {
  typeScroll: scrollBarType.isRequired,
  arrIngredients: arrayIngredientsType,
  arrDetailsOrder: arrayDetailsOrderType
}

export default ScrollBar;
