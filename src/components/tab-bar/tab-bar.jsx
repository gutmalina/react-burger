import { useState } from "react";
import { useSelector } from "react-redux";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./tab-bar.module.css";
import { ingredientConstants } from "../../utils/constants";

function TabBar() {
  const { SAUCE_RU, MAIN_RU, BUN_RU, SAUCE_EN, MAIN_EN, BUN_EN } =
    ingredientConstants;
  const [current, setCurrent] = useState(BUN_EN);
  const activeTab = useSelector((store) => store.burgerIngredients.activeTab);

  return (
    <div className={styles.container}>
      <Tab value={BUN_EN} active={activeTab === BUN_EN} onClick={setCurrent}>
        {BUN_RU}
      </Tab>
      <Tab
        value={SAUCE_EN}
        active={activeTab === SAUCE_EN}
        onClick={setCurrent}
      >
        {SAUCE_RU}
      </Tab>
      <Tab value={MAIN_EN} active={activeTab === MAIN_EN} onClick={setCurrent}>
        {MAIN_RU}
      </Tab>
    </div>
  );
}

export default TabBar;
