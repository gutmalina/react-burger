import { useContext } from 'react';
import { BurgerConstructorContext } from '../../contexts/BurgerConstructorContext';
import RenderCard from '../render-card/render-card';
import {
  TAG_BAR_BUN,
  TAG_BAR_MAIN,
  TAG_BAR_SAUCE,
  FILTER_BUN,
  FILTER_MAIN,
  FILTER_SAUCE
} from '../../utils/constants';
import { functionType } from '../../types/index';

function ScrollBarIngredients({ onOpenModal }){
  const ingredientsAll = useContext(BurgerConstructorContext);
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
        groupIngredients={getGroup(ingredientsAll, FILTER_BUN)}
      />
      <RenderCard
        onOpenModal={onOpenModal}
        typeGroup={TAG_BAR_SAUCE}
        groupIngredients={getGroup(ingredientsAll, FILTER_SAUCE)}
      />
      <RenderCard
        onOpenModal={onOpenModal}
        typeGroup={TAG_BAR_MAIN}
        groupIngredients={getGroup(ingredientsAll, FILTER_MAIN)}
      />
    </>
  );
};

ScrollBarIngredients.propTypes = {
  onOpenModal: functionType.isRequired
};

export default ScrollBarIngredients;
