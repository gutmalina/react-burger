import { forwardRef } from "react";
import { useLocation, Link } from "react-router-dom";
import styles from "./render-ingredient.module.css";
import Ingredient from "../ingredient/ingredient";
import { pathConstants } from "../../utils/constants";
import { TRenderIngredient, TIngredient } from "../../utils/types";

const RenderIngredient = forwardRef<HTMLDivElement, TRenderIngredient>(({ groupIngredients, typeGroup }, ref) => {
  const location = useLocation();
  const { INGREDIENTS } = pathConstants;

  return (
    <div className="mb-10">
      <p className="text text_type_main-medium mb-6">{typeGroup}</p>
      <div ref={ref} className={`${styles.cards} ml-4 mr-4`}>
        {groupIngredients.map((ingredient: TIngredient) => (
          <Link
            key={ingredient._id}
            to={`${INGREDIENTS}${ingredient._id}`}
            state={{ background: location }}
            className={styles.link}
          >
            <Ingredient ingredient={ingredient} />
          </Link>
        ))}
      </div>
    </div>
  );
});

export default RenderIngredient;
