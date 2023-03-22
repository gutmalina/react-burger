import { FC } from "react";
import { useDispatch } from "../../services/hooks";
import RenderBurgerInside from "../render-burger-inside/render-burger-inside";
import { updateBurgerFillingAction } from "../../services/actions/burger-constructor/burger-constructor";
import { TArrayIngredients } from "../../utils/types";

const ScrollBarConstructor: FC<TArrayIngredients> = ({ arrayIngredients }) => {
  const dispatch = useDispatch();

  /** сортировка при перетаскивании начинки бургера */
  const moveCard = (dragIndex: number, hoverIndex: number) => {
    const newIngredients = [...arrayIngredients];
    let dragIngredient = newIngredients[dragIndex];
    newIngredients.splice(dragIndex, 1);
    newIngredients.splice(hoverIndex, 0, dragIngredient);
    dispatch(updateBurgerFillingAction(newIngredients));
  };

  return (
    <>
      {arrayIngredients.map((card, index) => (
        <RenderBurgerInside
          card={card}
          key={card.keyid}
          index={index}
          moveCard={moveCard}
        />
      ))}
    </>
  );
};

export default ScrollBarConstructor;
