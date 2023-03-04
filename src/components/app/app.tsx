import { useEffect, useState, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, useLocation } from "react-router-dom";
import ProtectedRoute from "../protected-route/protected-route";
import OnlyUnAuthRoute from "../only-un-auth-route/only-un-auth-route";
import AppHeader from "../app-header/app-header";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import OrderDetails from "../order-details/order-details";
import { getIngredientsAction } from "../../services/actions/burger-ingredients";
import { getProfileAction } from "../../services/actions/user";
import { closeOrder } from "../../services/actions/order";
import { getCookie } from "../../utils/cookie";
import {
  buttonConstants,
  pathConstants,
  textConstants,
  tokenConstants,
  linkConstants,
} from "../../utils/constants";
import {
  HomePage,
  PageOverlay,
  LoginPage,
  RegisterPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  ProfilePage,
  NotFoundPage,
  OrderPage,
  PageIngredient,
} from "../../pages/index";

const App: FC = () => {
  const { SAVE, GO_IN, REGISTER, RESTORE } = buttonConstants;
  const {
    HOME,
    PROFILE,
    SIGN_IN,
    SIGN_UP,
    FORGOT,
    RESET,
    ORDER_HISTORY,
    INGREDIENTS_ID,
    NOT_FOUND,
  } = pathConstants;
  const {
    LOGIN,
    REGISTRATION,
    FORGOT_PASSWORD,
    DETAILS_INGREDIENT,
    NOT_FOUND_TEXT,
  } = textConstants;
  const { CANCEL, BACK } = linkConstants;
  const { ACCESS_TOKEN } = tokenConstants;

  const location = useLocation();
  const background = location.state && location.state.background;
  const dispatch = useDispatch<any>();
  const order = useSelector((store: any) => store.order.order);
  const { isLoggedIn, isGetSuccess } = useSelector((store: any) => store.user);
  const [isOnlyUnAuth, setIsOnlyUnAuth] = useState(false);
  const token = getCookie(ACCESS_TOKEN);

  /** получить массива ингридиентов */
  useEffect(() => {
    dispatch(getIngredientsAction());
  }, [dispatch]);

  /** получить данные пользователя*/
  useEffect(() => {
    if (isLoggedIn || token) {
      dispatch(getProfileAction());
    }
  }, [dispatch, token, isLoggedIn]);

  useEffect(() => {
    isLoggedIn && isGetSuccess ? setIsOnlyUnAuth(true) : setIsOnlyUnAuth(false);
  }, [isLoggedIn, isGetSuccess]);

  /** закрыть модальное окно Ордер */
  const onCloseOrder = () => {
    dispatch(closeOrder());
  };

  return (
    <>
      <AppHeader />
      <Routes location={background || location}>
        <Route path={HOME} element={<HomePage />} />
        <Route
          path={PROFILE}
          element={
            <ProtectedRoute
              redirectTo={SIGN_IN}
              element={
                <PageOverlay>
                  <ProfilePage textButton={SAVE} linkCancel={CANCEL} />
                </PageOverlay>
              }
            />
          }
        />
        <Route
          path={ORDER_HISTORY}
          element={
            <ProtectedRoute
              redirectTo={SIGN_IN}
              element={
                <PageOverlay>
                  <OrderPage textButton={BACK} />
                </PageOverlay>
              }
            />
          }
        />
        <Route
          path={SIGN_IN}
          element={
            <OnlyUnAuthRoute
              redirectTo={location.state?.from || HOME}
              onlyUnAuth={isOnlyUnAuth}
              element={
                <PageOverlay textTitle={LOGIN}>
                  <LoginPage textButton={GO_IN} />
                </PageOverlay>
              }
            />
          }
        />
        <Route
          path={SIGN_UP}
          element={
            <OnlyUnAuthRoute
              redirectTo={HOME}
              onlyUnAuth={isOnlyUnAuth}
              element={
                <PageOverlay textTitle={REGISTRATION}>
                  <RegisterPage textButton={REGISTER} />
                </PageOverlay>
              }
            />
          }
        />
        <Route
          path={FORGOT}
          element={
            <OnlyUnAuthRoute
              redirectTo={HOME}
              onlyUnAuth={isOnlyUnAuth}
              element={
                <PageOverlay textTitle={FORGOT_PASSWORD}>
                  <ForgotPasswordPage textButton={RESTORE} />
                </PageOverlay>
              }
            />
          }
        />
        <Route
          path={RESET}
          element={
            <OnlyUnAuthRoute
              redirectTo={HOME}
              onlyUnAuth={isOnlyUnAuth}
              element={
                <PageOverlay textTitle={FORGOT_PASSWORD}>
                  <ResetPasswordPage textButton={SAVE} />
                </PageOverlay>
              }
            />
          }
        />
        <Route
          path={INGREDIENTS_ID}
          element={
            <PageIngredient textTitle={DETAILS_INGREDIENT}>
              <IngredientDetails />
            </PageIngredient>
          }
        />
        <Route
          path={NOT_FOUND}
          element={
            <PageOverlay textTitle={NOT_FOUND_TEXT}>
              <NotFoundPage textButton={BACK} />
            </PageOverlay>
          }
        />
      </Routes>
      {background && (
        <>
          <Routes>
            <Route
              path={INGREDIENTS_ID}
              element={
                <Modal textTitle={DETAILS_INGREDIENT}>
                  <IngredientDetails />
                </Modal>
              }
            />
          </Routes>
        </>
      )}
      {order && (
        <Modal onClose={onCloseOrder}>
          <OrderDetails />
        </Modal>
      )}
    </>
  );
};

export default App;
