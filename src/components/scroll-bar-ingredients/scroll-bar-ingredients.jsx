import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RenderIngredient from '../render-ingredient/render-ingredient';
import {
  TAB_BAR_BUN,
  TAB_BAR_MAIN,
  TAB_BAR_SAUCE,
  FILTER_BUN,
  FILTER_MAIN,
  FILTER_SAUCE
} from '../../utils/constants';
import { useInView } from 'react-intersection-observer';
import { activeTabBar } from '../../services/actions/actions';

function ScrollBarIngredients(rootRef){
  const dispatch = useDispatch();
  const ingredientsAll = useSelector(store=>store.ingredients);
  const getGroup = (array, type) => {
    return array.filter((card) => (
      card.type === type
    ))
  };

  const [bunRef, inViewBun] = useInView();
  const [sauceRef, inViewSauce] = useInView();
  const [mainRef, inViewMain] = useInView();

  useEffect(()=>{
    if(!inViewBun && inViewSauce){
      dispatch(activeTabBar('sauce'))
    }else if(inViewMain && !inViewSauce && !inViewBun){
      dispatch(activeTabBar('main'))
    }else{
      dispatch(activeTabBar('bun'))
    }
  }, [dispatch, inViewBun, inViewSauce, inViewMain])

  return(
    <>
      <RenderIngredient
        ref={bunRef}
        typeGroup={TAB_BAR_BUN}
        groupIngredients={getGroup(ingredientsAll, FILTER_BUN)}
      />
      <RenderIngredient
        ref={sauceRef}
        typeGroup={TAB_BAR_SAUCE}
        groupIngredients={getGroup(ingredientsAll, FILTER_SAUCE)}
      />
      <RenderIngredient
        ref={mainRef}
        typeGroup={TAB_BAR_MAIN}
        groupIngredients={getGroup(ingredientsAll, FILTER_MAIN)}
      />

    </>
  );
};

export default ScrollBarIngredients;
