import { useEffect, useState } from 'react';
import { getIngredients, getOrder } from '../../utils/burger-api';
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
  const [isIngredients, setIsIngredients] = useState([]);
  const [isCardIngredient, setIsCardIngredient] = useState([]);
  const [isModalIngredientDetails, setIsModalIngredientDetails] = useState(false);
  const [isModalOrderDetails, setIsModalOrderDetails] = useState(false);
  const [isOrder, setIsOrder] = useState([]);
  const [isIdIngredients, setIsIdIngredients] = useState([]);

  /** получить массива ингридиентов */
  useEffect(()=>{
    getIngredients()
      .then((data)=>{
        setIsIngredients(data.data);
      })
      .catch((err)=>(console.log(err)))
  }, []);

  /** передать заказ и получить номер заказа */
  useEffect(()=>{
    if(isModalOrderDetails){
      getOrder(isIdIngredients)
        .then((data)=>{
          setIsOrder(data);
        })
        .catch((err)=>(console.log(err)))
    }
  }, [isModalOrderDetails]);

  /** открытие модального окна */
  const handleOpenModalOrderDetails = () => {
    setIsModalOrderDetails(true);
  };

  const handleOpenModalIngredientDetails = (card) => {
    setIsCardIngredient(card);
    setIsModalIngredientDetails(true);
  };

  /** закрытие модального окна */
  const handleCloseModal = () => {
    setIsModalIngredientDetails(false);
    setIsModalOrderDetails(false);
  };

  return (
    <>
      <BurgerConstructorContext.Provider value={isIngredients}>
        <AppHeader/>
        <section className={styles.main}>
          <h1 className="text text_type_main-large mt-10 mb-5">
            {TITLE_LEAD}
          </h1>
          <div className={styles.make_burger}>
            <BurgerIngredients
              onOpenModal={handleOpenModalIngredientDetails}
            />
            <BurgerConstructor
              onOpenModal={handleOpenModalOrderDetails}
              setIsIdIngredients={setIsIdIngredients}
            />
          </div>
        </section>
      </BurgerConstructorContext.Provider>
      <Modal
        isModal={isModalIngredientDetails}
        onClose={handleCloseModal}
        textTitle={MODAL_TITLE}>
        {
          <IngredientDetails
            onCard={isCardIngredient}/>
        }
      </Modal>
      <Modal
        isModal={isModalOrderDetails}
        onClose={handleCloseModal}>
        {
          <OrderDetails
            isOrder={isOrder}/>
        }
      </Modal>
    </>
  );
};

export default App;
