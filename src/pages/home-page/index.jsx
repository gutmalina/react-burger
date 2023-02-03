import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import BurgerIngredients from '../../components/burger-ingredients/burger-ingredients';
import BurgerConstructor from '../../components/burger-constructor/burger-constructor';
import styles from './home-page.module.css';
import { TITLE_LEAD } from '../../utils/constants';

function HomePage(){
  return (
    <section className={styles.main}>
      <h1 className="text text_type_main-large mt-10 mb-5">
        {TITLE_LEAD}
      </h1>
      <div className={styles.make_burger}>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients/>
          <BurgerConstructor/>
        </DndProvider>
      </div>
    </section>
  );
};

export { HomePage };
