import { useEffect, useState } from 'react';
import { BASE_URL } from "../../utils/config";
import styles from './app.module.css';
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

/** получение массива ингридиентов */
  useEffect(()=>{
    fetch(BASE_URL, {
      method: 'GET',
      header: {
        'Content-Type': 'application/json'
      }
    })
      .then((res)=>{
        if(res.ok){
          return res.json()
        }else{
          Promise.reject(res.status)
        }
      })
      .then((data)=>{
        setIsIngredients(data.data)
      })
      .catch((err)=>(console.log(err)))
  }, []);

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
      <AppHeader/>
      <section className={styles.main}>
        <h1 className="text text_type_main-large mt-10 mb-5">
          {TITLE_LEAD}
        </h1>
        <div className={styles.make_burger}>
          <BurgerIngredients
            onOpenModal={handleOpenModalIngredientDetails}
            arrIngredients={isIngredients}
          />
          <BurgerConstructor
            onOpenModal={handleOpenModalOrderDetails}
            arrDetailsOrder={isIngredients}
          />
        </div>
      </section>
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
          <OrderDetails/>
        }
      </Modal>
    </>
  );
};

export default App;
