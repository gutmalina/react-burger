import RenderCard from '../render-card/render-card';
import {
  TAG_BAR_BUN,
  TAG_BAR_MAIN,
  TAG_BAR_SAUCE,
  FILTER_BUN,
  FILTER_MAIN,
  FILTER_SAUCE
} from '../../utils/constants';
import {
  arrayIngredientsType,
  functionType
} from '../../types/index';

function ScrollBarIngredients({
  onOpenModal,
  arrIngredients
}){
  const getGroup = (array, type) => {
    return array.filter((card) => (
      card.type === type
    ))
  };

  return(
    <>
      <RenderCard
        onOpenModal={onOpenModal}
        typeGroup={TAG_BAR_BUN}
        groupIngredients={getGroup(arrIngredients, FILTER_BUN)}
      />
      <RenderCard
        onOpenModal={onOpenModal}
        typeGroup={TAG_BAR_SAUCE}
        groupIngredients={getGroup(arrIngredients, FILTER_SAUCE)}
      />
      <RenderCard
        onOpenModal={onOpenModal}
        typeGroup={TAG_BAR_MAIN}
        groupIngredients={getGroup(arrIngredients, FILTER_MAIN)}
      />
    </>
  );
};

ScrollBarIngredients.propTypes = {
  arrIngredients: arrayIngredientsType.isRequired,
  onOpenModal: functionType.isRequired
};

export default ScrollBarIngredients;
