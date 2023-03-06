import { useMemo, useState, FC } from "react";
import { useSelector } from "react-redux";
import { useDrag } from "react-dnd/dist/hooks";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ingredient.module.css";
import { TIngredient, TPropsIngredient } from "../../utils/types";

const Ingredient: FC<TPropsIngredient> = ({ ingredient }) => {
  const { name, price, image, _id } = ingredient;
  const [count, setCount] = useState<number>(0);
  const burger = useSelector((store: any) => store.burgerConstructor.burger);

  /** перетаскиваемый элемент - ингредиент в бургер */
  const [, dragRef] = useDrag({
    type: ingredient.type,
    item: ingredient,
  });

  /** счетчик выбранных ингридиентов */
  const handleCounerIngredient = useMemo(() => {
    const arrBurger = burger.filling.concat(burger.bun, burger.bun);
    const arrId = arrBurger.map((a: TIngredient ) => a._id);
    setCount(arrId.filter((a: string) => a === _id).length);
  }, [burger, _id]);

  const countClass = count ? "" : styles.counter_hidden;

  return (
    <article className={styles.card} ref={dragRef}>
      <Counter count={count} size="default" extraClass={countClass} />
      <img
        className={`${styles.image} mr-4 mb-2 ml-4`}
        src={image}
        alt={name}
      />
      <div className={`${styles.price} mb-2`}>
        <span className="text text_type_digits-default">{price}</span>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`${styles.subtitle} text text_type_main-default`}>{name}</p>
    </article>
  );
};

export default Ingredient;
