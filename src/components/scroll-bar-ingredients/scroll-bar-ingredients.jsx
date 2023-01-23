import { useSelector } from 'react-redux';
import RenderIngredient from '../render-ingredient/render-ingredient';
import {
  TAG_BAR_BUN,
  TAG_BAR_MAIN,
  TAG_BAR_SAUCE,
  FILTER_BUN,
  FILTER_MAIN,
  FILTER_SAUCE
} from '../../utils/constants';

function ScrollBarIngredients(){
  const ingredientsAll = useSelector(store=>store.ingredients);
  const getGroup = (array, type) => {
    return array.filter((card) => (
      card.type === type
    ))
  };

  return(
    <>
      <RenderIngredient
        typeGroup={TAG_BAR_BUN}
        groupIngredients={getGroup(ingredientsAll, FILTER_BUN)}
      />
      <RenderIngredient
        typeGroup={TAG_BAR_SAUCE}
        groupIngredients={getGroup(ingredientsAll, FILTER_SAUCE)}
      />
      <RenderIngredient
        typeGroup={TAG_BAR_MAIN}
        groupIngredients={getGroup(ingredientsAll, FILTER_MAIN)}
      />
    </>
  );
};

export default ScrollBarIngredients;
