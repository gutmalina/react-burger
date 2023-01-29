import {useState} from 'react';
import { useSelector } from 'react-redux';
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './tab-bar.module.css';
import {
  TAB_BAR_BUN,
  TAB_BAR_MAIN,
  TAB_BAR_SAUCE
} from '../../utils/constants';

function TabBar () {
  const [current, setCurrent] = useState('bun');
  const activeTab = useSelector(store=>store.ingredients.activeTab);

  return (
    <div className={styles.container}>
      <Tab
        value="bun"
        active={activeTab === 'bun'}
        onClick={setCurrent}>
          {TAB_BAR_BUN}
      </Tab>
      <Tab
        value="sauce"
        active={activeTab === 'sauce'}
        onClick={setCurrent}>
          {TAB_BAR_SAUCE}
      </Tab>
      <Tab
        value="main"
        active={activeTab === 'main'}
        onClick={setCurrent}>
          {TAB_BAR_MAIN}
      </Tab>
    </div>
  );
};

export default TabBar;

