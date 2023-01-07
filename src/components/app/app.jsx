import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
import { ingredients } from '../../utils/ingredients';
import { detailsOrder } from '../../utils/detailOrder';
import { TITLE_LEAD } from '../../utils/constants';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

function App() {
  return (
    <div className={styles.body}>
      <div className={styles.page}>
        <AppHeader/>
        <section className={styles.main}>
          <h1 className="text text_type_main-large mt-10 mb-5">
            {TITLE_LEAD}
          </h1>
          <div className={styles.make_burger}>
            <BurgerIngredients
              arrIngredients={ingredients}
            />
            <BurgerConstructor
              arrDetailsOrder={detailsOrder}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
