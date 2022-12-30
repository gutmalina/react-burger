import styles from './main.module.css';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

function Main(){
  return(
    <section className={styles.main}>
      <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
      <div className={styles.make_burger}>
        <BurgerIngredients/>
        <BurgerConstructor/>
      </div>
    </section>
  );
};

export default Main;
