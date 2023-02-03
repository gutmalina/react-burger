import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes as Switch, Route, Navigate} from 'react-router-dom';
import AppHeader from '../app-header/app-header';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import OrderDetails from '../order-details/order-details';
import { getIngredientsAction } from '../../services/actions/actions';
import { getProfileAction } from '../../services/actions/user';
import {
  MODAL_TITLE,
  PAGE_LOGIN,
  PAGE_REGISTER,
  PAGE_PASSWORD,
  GO_IN,
  SIGN_UP,
  RESTORE,
  SAVE,
  CANCEL,
  PATH_HOME,
  PATH_LOGIN,
  PATH_REGISTER,
  PATH_FORGOT_PASSWORD,
  PATH_RESET_PASSWORD,
  PATH_PROFILE
} from '../../utils/constants';
import {
  HomePage,
  AuthPage,
  LoginPage,
  RegisterPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  ProfilePage
 } from '../../pages/index';


function App() {
  const ingredient = useSelector(store=>store.ingredientDetailsModal.ingredient);
  const { order, loggedIn } = useSelector(store=>({
    order: store.order.order,
    loggedIn: store.authentication.loggedIn}));
  const dispatch = useDispatch();

  /** получить массива ингридиентов и данные пользователя */
  useEffect(()=>{
    if(loggedIn){
      Promise
        .all([dispatch(getIngredientsAction()), dispatch(getProfileAction())])
     .then()
     .catch((err)=>{
      console.log(err)
     })
    }
  }, [dispatch, loggedIn]);

  return (
    <>
      <AppHeader/>
      <Switch>
        {/* <Route
          path={PATH_HOME}
          exact={true}
          element={
            LoggedIn
            ? <HomePage/>
            : <Navigate to={PATH_LOGIN} />}/> */}
        <Route path={PATH_HOME} exact={true} element={<HomePage/>}/>
        <Route
          path={PATH_PROFILE}
          exact={true}
          element={
            <AuthPage>
              <ProfilePage
                textButtonSave={SAVE}
                textButtonCancel={CANCEL}/>
            </AuthPage>}/>
        <Route
          path={PATH_LOGIN}
          exact={true}
          element={
            <AuthPage textTitle={PAGE_LOGIN}>
              <LoginPage textButton={GO_IN}/>
            </AuthPage>}/>
        <Route
          path={PATH_REGISTER}
          exact={true}
          element={
            <AuthPage textTitle={PAGE_REGISTER}>
              <RegisterPage textButton={SIGN_UP}/>
            </AuthPage>}/>
        <Route
          path={PATH_FORGOT_PASSWORD}
          exact={true}
          element={
            <AuthPage textTitle={PAGE_PASSWORD}>
              <ForgotPasswordPage textButton={RESTORE}/>
            </AuthPage>}/>
        <Route
          path={PATH_RESET_PASSWORD}
          exact={true}
          element={
            <AuthPage textTitle={PAGE_PASSWORD}>
              <ResetPasswordPage textButton={SAVE}/>
            </AuthPage>}/>
      </Switch>
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
