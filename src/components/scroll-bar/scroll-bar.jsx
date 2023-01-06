import { Scrollbars } from 'react-custom-scrollbars-2';
import styles from './scroll-bar.module.css';
import Ingredients from '../ingredients/ingredients';
import DetailsOrder from '../details-order/details-order';
import {
  SCROLL_BAR_TYPE_INGREDIENTS,
  SCROLL_BAR_INGREDIENTS_TRACK_VERTICAL,
  SCROLL_BAR_INGREDIENTS_THUMB_VERTICAL,
  SCROLL_BAR_SIZE_INGREDIENTS,
  SCROLL_BAR_DETAILS_ORDER_TRACK_VERTICAL,
  SCROLL_BAR_DETAILS_ORDER_THUMB_VERTICAL,
  SCROLL_BAR_SIZE_DETAILS_ORDER
} from '../../utils/constants';

function ScrollBar({
  typeScroll,
  arrIngredients,
  arrDetailsOrder
}){
  const typeTrackVertical = (typeScroll === SCROLL_BAR_TYPE_INGREDIENTS ?
    SCROLL_BAR_INGREDIENTS_TRACK_VERTICAL :
    SCROLL_BAR_DETAILS_ORDER_TRACK_VERTICAL);
  const typeThumbVertical = (typeScroll === SCROLL_BAR_TYPE_INGREDIENTS ?
    SCROLL_BAR_INGREDIENTS_THUMB_VERTICAL :
    SCROLL_BAR_DETAILS_ORDER_THUMB_VERTICAL);
  const styleScrollBar = (typeScroll === SCROLL_BAR_TYPE_INGREDIENTS ?
    SCROLL_BAR_SIZE_INGREDIENTS :
    SCROLL_BAR_SIZE_DETAILS_ORDER);

  return(
    <>
      <Scrollbars
        className={styles.scroll_bar}
        style={styleScrollBar}
        renderTrackVertical={typeTrackVertical}
        renderThumbVertical={typeThumbVertical}
        >
        {typeScroll === SCROLL_BAR_TYPE_INGREDIENTS ?
          <Ingredients
          arrIngredients={arrIngredients}
        /> :
          <DetailsOrder
          arrDetailsOrder={arrDetailsOrder}
        />
        }
      </Scrollbars>
    </>
  );
};

export default ScrollBar;
