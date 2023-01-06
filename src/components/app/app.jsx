import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
import Main from '../main/main';
import { ingredients } from '../../utils/ingredients';
import { detailsOrder } from '../../utils/detailOrder';

function App() {
  return (
    <div className={styles.body}>
      <div className={styles.page}>
        <AppHeader/>
        <Main
          arrIngredients={ingredients}
          arrDetailsOrder={detailsOrder}
          />
      </div>
    </div>
  );
};

export default App;
