import React from 'react';
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import {
  TAG_BAR_BUN,
  TAG_BAR_MAIN,
  TAG_BAR_SAUCE
} from '../../utils/constants';

function TabBar() {
  const [current, setCurrent] = React.useState('one');

  return (
    <div
      style={{display: 'flex', marginBottom: 40}}
      >
      <Tab
        value="one"
        active={current === 'one'}
        onClick={setCurrent}>
          {TAG_BAR_BUN}
      </Tab>
      <Tab
        value="two"
        active={current === 'two'}
        onClick={setCurrent}>
          {TAG_BAR_SAUCE}
      </Tab>
      <Tab
        value="three"
        active={current === 'three'}
        onClick={setCurrent}>
          {TAG_BAR_MAIN}
      </Tab>
    </div>
  );
};

export default TabBar;

