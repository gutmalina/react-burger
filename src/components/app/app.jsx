import { useEffect, useState } from 'react';
import { getIngredients } from '../../utils/burger-api';
import styles from './app.module.css';
import { BurgerConstructorContext } from '../../contexts/BurgerConstructorContext';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import OrderDetails from '../order-details/order-details';
import {
  TITLE_LEAD,
  MODAL_TITLE
} from '../../utils/constants';

function App() {
  const [ingredients, setIngredients] = useState([]);
  const [cardIngredient, setCardIngredient] = useState('');
  const [order, setOrder] = useState('');

  /** получить массива ингридиентов */
  useEffect(()=>{
    getIngredients()
      .then((data)=>{
        setIngredients(data.data);
      })
      .catch((err)=>(console.log(err)))
  }, []);

  return (
    <>
      <BurgerConstructorContext.Provider value={ingredients}>
        <AppHeader/>
        <section className={styles.main}>
          <h1 className="text text_type_main-large mt-10 mb-5">
            {TITLE_LEAD}
          </h1>
          <div className={styles.make_burger}>
            <BurgerIngredients
              setCardIngredient={setCardIngredient}
            />
            <BurgerConstructor
              setOrder={setOrder}
            />
          </div>
        </section>
      </BurgerConstructorContext.Provider>
      <Modal
        isOpenModal={cardIngredient}
        isCloseModal={setCardIngredient}
        textTitle={MODAL_TITLE}>
        {
          <IngredientDetails
            onCard={cardIngredient}/>
        }
      </Modal>
      <Modal
        isOpenModal={order}
        isCloseModal={setOrder}>
        {
          <OrderDetails
            order={order}/>
        }
      </Modal>
    </>
  );
};

export default App;
