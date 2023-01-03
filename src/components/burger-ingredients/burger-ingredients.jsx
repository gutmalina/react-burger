import TabBar from '../tag-bar/tag-bar';
import ScrollBar from '../scroll-bar/scroll-bar';
import { SCROLL_BAR_TYPE_INGREDIENTS } from '../../utils/constants';

function BurgerIngredients({arrIngredients}){
  return(
    <div>
      <TabBar/>
      <ScrollBar
        typeScroll={SCROLL_BAR_TYPE_INGREDIENTS}
        arrIngredients={arrIngredients}
      />
    </div>
  );
};

export default BurgerIngredients;
