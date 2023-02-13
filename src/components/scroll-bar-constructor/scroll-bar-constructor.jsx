import { useDispatch } from "react-redux";
import RenderBurgerInside from "../render-burger-inside/render-burger-inside";
import { updateBurgerFilling } from "../../services/actions/burger-constructor";
import { arrayIngredientsType } from "../../types/index";

function ScrollBarConstructor({ ingredientInside }) {
  const dispatch = useDispatch();

  /** сортировка при перетаскивании начинки бургера */
  const moveCard = (dragIndex, hoverIndex) => {
    const newIngredients = [...ingredientInside];
    let dragIngredient = newIngredients[dragIndex];
    newIngredients.splice(dragIndex, 1);
    newIngredients.splice(hoverIndex, 0, dragIngredient);
    dispatch(updateBurgerFilling(newIngredients));
  };

  return (
    <>
      {ingredientInside.map((card, index) => (
        <RenderBurgerInside
          card={card}
          key={card.keyid}
          index={index}
          moveCard={moveCard}
        />
      ))}
    </>
  );
}

ScrollBarConstructor.protoTypes = {
  ingredientInside: arrayIngredientsType.isRequired,
};

export default ScrollBarConstructor;
