import { FC } from "react";
import TabBar from "../tab-bar/tab-bar";
import ScrollBar from "../scroll-bar/scroll-bar";
import ScrollBarIngredients from "../scroll-bar-ingredients/scroll-bar-ingredients";
import { scrollBarConstants } from "../../utils/constants";

const BurgerIngredients: FC = () => {
  const { TYPE_INGREDIENTS } = scrollBarConstants;

  return (
    <div>
      <TabBar />
      <ScrollBar typeScroll={TYPE_INGREDIENTS}>
        <ScrollBarIngredients />
      </ScrollBar>
    </div>
  );
};

export default BurgerIngredients;
