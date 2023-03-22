import { useEffect, FC } from "react";
import { useDispatch, useSelector } from "../../services/hooks";
import { useInView } from "react-intersection-observer";
import RenderIngredient from "../render-ingredient/render-ingredient";
import { activeTabBarAction } from "../../services/actions/burger-ingredients/burger-ingredients";
import { ingredientConstants } from "../../utils/constants";
import { TIngredient } from "../../utils/types";

const ScrollBarIngredients: FC = () => {
  const dispatch = useDispatch();
  const ingredientsAll = useSelector(
    (store) => store.burgerIngredients.ingredients
  );
  const { SAUCE_EN, MAIN_EN, BUN_EN, SAUCE_RU, MAIN_RU, BUN_RU } =
    ingredientConstants;

  /** фильтр ингридиентов по типу */
  const getGroup = (array: TIngredient[], type: string) => {
    return array.filter((card) => card.type === type);
  };

  const [bunRef, inViewBun] = useInView();
  const [sauceRef, inViewSauce] = useInView();
  const [mainRef, inViewMain] = useInView();

  /** навигация по типу ингридиентов */
  useEffect(() => {
    if (!inViewBun && inViewSauce) {
      dispatch(activeTabBarAction(SAUCE_EN));
    } else if (inViewMain && !inViewSauce && !inViewBun) {
      dispatch(activeTabBarAction(MAIN_EN));
    } else {
      dispatch(activeTabBarAction(BUN_EN));
    }
  }, [dispatch, inViewBun, inViewSauce, inViewMain, SAUCE_EN, MAIN_EN, BUN_EN]);

  return (
    <>
      <RenderIngredient
        ref={bunRef}
        typeGroup={BUN_RU}
        groupIngredients={getGroup(ingredientsAll, BUN_EN)}
      />
      <RenderIngredient
        ref={sauceRef}
        typeGroup={SAUCE_RU}
        groupIngredients={getGroup(ingredientsAll, SAUCE_EN)}
      />
      <RenderIngredient
        ref={mainRef}
        typeGroup={MAIN_RU}
        groupIngredients={getGroup(ingredientsAll, MAIN_EN)}
      />
    </>
  );
};

export default ScrollBarIngredients;
