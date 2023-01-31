import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import OrderDetails from '../order-details/order-details';
import { getIngredientsAction } from '../../services/actions/actions';
import {
  TITLE_LEAD,
  MODAL_TITLE,
  PAGE_LOGIN,
  PAGE_REGISTER,
  PAGE_PASSWORD,
  GO_IN,
  SIGN_UP,
  RESTORE,
  SAVE
} from '../../utils/constants';
import {
  Page,
  LoginPage,
  RegisterPage,
  ForgotPasswordPage,
  ResetPasswordPage
 } from '../../pages/index';


function App() {
  const ingredient = useSelector(store=>store.ingredientDetailsModal.ingredient);
  const order = useSelector(store=>store.order.order)
  const dispatch = useDispatch()

  /** получить массива ингридиентов */
  useEffect(()=>{
      dispatch(getIngredientsAction())
  }, [dispatch]);

  return (
    <>
      <AppHeader/>
      {/* <Page
        textTitle={PAGE_LOGIN}
        textButton={GO_IN}>
        <LoginPage/>
      </Page> */}
      {/* <Page
        textTitle={PAGE_REGISTER}
        textButton={SIGN_UP}>
        <RegisterPage/>
      </Page> */}
      {/* <Page
        textTitle={PAGE_PASSWORD}
        textButton={RESTORE}>
        <ForgotPasswordPage/>
      </Page> */}
      {/* <Page
        textTitle={PAGE_PASSWORD}
        textButton={SAVE}>
        <ResetPasswordPage/>
      </Page> */}
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
      <Modal
        isOpenModal={Object.keys(ingredient).length}
        textTitle={MODAL_TITLE}>
        <IngredientDetails/>
      </Modal>
      <Modal
        isOpenModal={order.success}>
        <OrderDetails order={order}/>
      </Modal>
    </>
  );
};

export default App;
