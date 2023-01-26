import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import RenderIngredient from '../render-ingredient/render-ingredient';
import { activeTabBar } from '../../services/actions/actions';
import {
  TAB_BAR_BUN,
  TAB_BAR_MAIN,
  TAB_BAR_SAUCE,
  FILTER_BUN,
  FILTER_MAIN,
  FILTER_SAUCE
} from '../../utils/constants';

function ScrollBarIngredients(rootRef){
  const dispatch = useDispatch();
  const ingredientsAll = useSelector(store=>store.ingredients);

  /** фильтр ингридиентво по типу */
  const getGroup = (array, type) => {
    return array.filter((card) => (
      card.type === type
    ))
  };

  const [bunRef, inViewBun] = useInView();
  const [sauceRef, inViewSauce] = useInView();
  const [mainRef, inViewMain] = useInView();

  /** навигация по типу ингридиентов */
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
