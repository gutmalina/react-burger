import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes as Switch, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "../protected-route/protected-route";
import AppHeader from "../app-header/app-header";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import OrderDetails from "../order-details/order-details";
import { getIngredientsAction } from "../../services/actions/actions";
import { getProfileAction } from "../../services/actions/user";
import {
  MODAL_TITLE,
  PAGE_LOGIN,
  PAGE_REGISTER,
  PAGE_PASSWORD,
  PAGE_NOT_FOUND,
  GO_IN,
  SIGN_UP,
  RESTORE,
  SAVE,
  CANCEL,
  BACK,
  PATH_HOME,
  PATH_LOGIN,
  PATH_REGISTER,
  PATH_FORGOT_PASSWORD,
  PATH_RESET_PASSWORD,
  PATH_PROFILE,
  PATH_NOT_FOUND,
  PATH_ORDER_HISTORY,
} from "../../utils/constants";
import {
  HomePage,
  AuthPage,
  LoginPage,
  RegisterPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  ProfilePage,
  NotFoundPage,
  Orders,
} from "../../pages/index";

function App() {
  const { ingredient, order, loggedIn } = useSelector((store) => ({
    ingredient: store.ingredientDetailsModal.ingredient,
    order: store.order.order,
    loggedIn: store.user.loggedIn,
  }));

  const dispatch = useDispatch();

  /** получить массива ингридиентов */
  useEffect(() => {
    dispatch(getIngredientsAction());
  }, [dispatch]);

  /** получить данные пользователя */
  useEffect(() => {
    if (loggedIn) {
      dispatch(getProfileAction());
    }
  }, [dispatch, loggedIn]);

  return (
    <>
      <AppHeader />
      <Switch>
        <Route path={PATH_HOME} exact={true} element={<HomePage />} />
        <Route
          path={PATH_PROFILE}
          exact={true}
          element={
            <ProtectedRoute
              element={
                <AuthPage>
                  <ProfilePage
                    textButtonSave={SAVE}
                    textButtonCancel={CANCEL}
                  />
                </AuthPage>
              }
            />
          }
        />
        <Route
          path={PATH_LOGIN}
          exact={true}
          element={
            loggedIn ? (
              <Navigate to={PATH_HOME} replace/>
            ) : (
              <AuthPage textTitle={PAGE_LOGIN}>
                <LoginPage textButton={GO_IN} />
              </AuthPage>
            )
          }
        />
        <Route
          path={PATH_REGISTER}
          exact={true}
          element={
            loggedIn ? (
              <Navigate to={PATH_HOME} replace/>
            ) : (
              <AuthPage textTitle={PAGE_REGISTER}>
                <RegisterPage textButton={SIGN_UP} />
              </AuthPage>
            )
          }
        />
        <Route
          path={PATH_FORGOT_PASSWORD}
          exact={true}
          element={
            loggedIn ? (
              <HomePage />
            ) : (
              <AuthPage textTitle={PAGE_PASSWORD}>
                <ForgotPasswordPage textButton={RESTORE} />
              </AuthPage>
            )
          }
        />
        <Route
          path={PATH_RESET_PASSWORD}
          exact={true}
          element={
            loggedIn ? (
              <HomePage />
            ) : (
              <AuthPage textTitle={PAGE_PASSWORD}>
                <ResetPasswordPage textButton={SAVE} />
              </AuthPage>
            )
          }
        />
        <Route
          path={PATH_ORDER_HISTORY}
          exact={true}
          element={
            <AuthPage textTitle="">
              <Orders textButton={BACK} />
            </AuthPage>
          }
        />
        <Route
          path={PATH_NOT_FOUND}
          exact={true}
          element={
            <AuthPage textTitle={PAGE_NOT_FOUND}>
              <NotFoundPage textButton={BACK} />
            </AuthPage>
          }
        />
      </Switch>
      <Modal
        isOpenModal={Object.keys(ingredient).length}
        textTitle={MODAL_TITLE}
      >
        <IngredientDetails />
      </Modal>
      <Modal isOpenModal={order.success}>
        <OrderDetails order={order} />
      </Modal>
    </>
  );
}

export default App;
