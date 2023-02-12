import {useState} from 'react';
import { useSelector } from 'react-redux';
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './tab-bar.module.css';
import { ingredientConstants } from '../../utils/constants';

function TabBar () {
  const [current, setCurrent] = useState('bun');
  const activeTab = useSelector(store=>store.burgerIngredients.activeTab);
  const {SAUCE_RU, MAIN_RU, BUN_RU} = ingredientConstants;

  return (
    <div className={styles.container}>
      <Tab
        value="bun"
        active={activeTab === 'bun'}
        onClick={setCurrent}>
          {BUN_RU}
      </Tab>
      <Tab
        value="sauce"
        active={activeTab === 'sauce'}
        onClick={setCurrent}>
          {SAUCE_RU}
      </Tab>
      <Tab
        value="main"
        active={activeTab === 'main'}
        onClick={setCurrent}>
          {MAIN_RU}
      </Tab>
    </div>
  );
};

export default TabBar;

