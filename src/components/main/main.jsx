import styles from './main.module.css';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { TITLE_LEAD } from '../../utils/constants';

function Main({
  arrIngredients,
  arrDetailsOrder
}){
  return(
    <section className={styles.main}>
      <h1 className="text text_type_main-large mt-10 mb-5">
        {TITLE_LEAD}
      </h1>
      <div className={styles.make_burger}>
        <BurgerIngredients
          arrIngredients={arrIngredients}
        />
        <BurgerConstructor
          arrDetailsOrder={arrDetailsOrder}
        />
      </div>
    </section>
  );
};

export default Main;
