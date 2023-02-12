import { forwardRef } from "react";
import { useLocation, Link } from "react-router-dom";
import styles from "./render-ingredient.module.css";
import Ingredient from "../ingredient/ingredient";
import { textType, arrayIngredientsType } from "../../types/index";
import { pathConstants } from "../../utils/constants";

const RenderIngredient = forwardRef(({ groupIngredients, typeGroup }, ref) => {
  const location = useLocation();
  const { INGREDIENTS } = pathConstants;

  return (
    <div className="mb-10">
      <p className="text text_type_main-medium mb-6">{typeGroup}</p>
      <section ref={ref} className={`${styles.cards} ml-4 mr-4`}>
        {groupIngredients.map((ingredient) => (
          <Link
            key={ingredient._id}
            to={`${INGREDIENTS}${ingredient._id}`}
            state={{ background: location }}
            className={styles.link}
          >
            <Ingredient ingredient={ingredient}/>
          </Link>
        ))}
      </section>
    </div>
  );
});

RenderIngredient.propTypes = {
  groupIngredients: arrayIngredientsType.isRequired,
  typeGroup: textType.isRequired,
};

export default RenderIngredient;
