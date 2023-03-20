import { FC } from "react";
import { useSelector } from "../../services/hooks";
import { useParams } from "react-router-dom";
import styles from "./ingredient-details.module.css";
import { ingredientConstants } from "../../utils/constants";
import { TIngredient } from "../../utils/types";

const IngredientDetails: FC = () => {
  const { CALORIES, PROTEINS, FAT, CARBOHYDRATES } = ingredientConstants;
  const ingredients = useSelector(
    (store) => store.burgerIngredients.ingredients
  );
  const { id } = useParams();
  const ingredient = id && ingredients.find((item: TIngredient) => item._id === id.slice(1));

  if (!ingredient) return <div>Обработка данных</div>;

  return (
    <>
      <img
        className={`${styles.image} mt-2 mb-5`}
        src={ingredient.image}
        alt={ingredient.name}
      />
      <p className={`${styles.subtitle} text text_type_main-medium mb-4`}>
        {ingredient.name}
      </p>
      <ul className={styles.group}>
        <li className={styles.item}>
          <h4 className="text text_type_main-default text_color_inactive mb-1">
            {CALORIES}
          </h4>
          <p className="text text_type_digits-default text_color_inactive">
            {ingredient.calories}
          </p>
        </li>
        <li className={styles.item}>
          <h4 className="text text_type_main-default text_color_inactive mb-1">
            {PROTEINS}
          </h4>
          <p className="text text_type_digits-default text_color_inactive">
            {ingredient.proteins}
          </p>
        </li>
        <li className={styles.item}>
          <h4 className="text text_type_main-default text_color_inactive mb-1">
            {FAT}
          </h4>
          <p className="text text_type_digits-default text_color_inactive">
            {ingredient.fat}
          </p>
        </li>
        <li className={styles.item}>
          <h4 className="text text_type_main-default text_color_inactive mb-1">
            {CARBOHYDRATES}
          </h4>
          <p className="text text_type_digits-default text_color_inactive">
            {ingredient.carbohydrates}
          </p>
        </li>
      </ul>
    </>
  );
};

export default IngredientDetails;
