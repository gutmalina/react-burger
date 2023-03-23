import { FC } from "react";
import styles from "./ingredient-in-order.module.css";
import { TPropsIngredient } from "../../utils/types";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const IngredientInOrder: FC<TPropsIngredient> = ({ ingredient }) => {

  return (
    <div className={`${styles.card_ingredient} mb-4`}>
      <div className={styles.card_wrap}>
        <img
          alt={ingredient.name}
          src={ingredient.image}
          className={styles.image}
        ></img>
      </div>
      <p className="text text_type_main-default">{ingredient.name}</p>
      <div className={styles.count}>
        <p className="text text_type_digits-default mr-2">
          {ingredient.count} x {ingredient.price}
        </p>
        <CurrencyIcon type="primary" />
      </div>
    </div>
  );
};

export default IngredientInOrder;
