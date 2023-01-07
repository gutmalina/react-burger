import RenderCard from '../render-card/render-card';
import {
  TAG_BAR_BUN,
  TAG_BAR_MAIN,
  TAG_BAR_SAUCE,
  FILTER_BUN,
  FILTER_MAIN,
  FILTER_SAUCE
} from '../../utils/constants';
import { arrayIngredientsType } from '../../types/index';

const heandleGroupIngredients = (array, type) => {
  return array.filter((card) => (
    card.type === type
  ))
};

function Ingredients({arrIngredients}){
  return(
    <>
      <RenderCard
        typeGroup={TAG_BAR_BUN}
        groupIngredients={heandleGroupIngredients(arrIngredients, FILTER_BUN)}
      />
      <RenderCard
        typeGroup={TAG_BAR_MAIN}
        groupIngredients={heandleGroupIngredients(arrIngredients, FILTER_MAIN)}
      />
      <RenderCard
        typeGroup={TAG_BAR_SAUCE}
        groupIngredients={heandleGroupIngredients(arrIngredients, FILTER_SAUCE)}
      />
    </>
  );
};

Ingredients.propTypes = {
  arrIngredients: arrayIngredientsType.isRequired
}

export default Ingredients;
