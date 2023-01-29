import TabBar from '../tab-bar/tab-bar';
import ScrollBar from '../scroll-bar/scroll-bar';
import ScrollBarIngredients from '../scroll-bar-ingredients/scroll-bar-ingredients';
import { SCROLL_BAR_TYPE_INGREDIENTS } from '../../utils/constants';

function BurgerIngredients(){

  return(
    <div>
      <TabBar/>
      <ScrollBar typeScroll={SCROLL_BAR_TYPE_INGREDIENTS}>
        <ScrollBarIngredients/>
      </ScrollBar>
    </div>
  );
};

export default BurgerIngredients;
