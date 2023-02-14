import { useEffect, useState } from "react";
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

function App() {
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
  const dispatch = useDispatch();
  const order = useSelector((store) => store.order.order);
  const { isLoggedIn, isGetSuccess } = useSelector((store) => store.user);
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

  return (
    <>
      <AppHeader />
      <Routes location={location}>
        <Route path={HOME} exact={true} element={<HomePage />} />
        <Route
          path={PROFILE}
          exact={true}
          element={
            <ProtectedRoute
              redirectTo={SIGN_IN}
              element={
                <PageOverlay>
                  <ProfilePage buttonSave={SAVE} linkCancel={CANCEL} />
                </PageOverlay>
              }
            />
          }
        />
        <Route
          path={ORDER_HISTORY}
          exact={true}
          element={
            <ProtectedRoute
              redirectTo={SIGN_IN}
              element={
                <PageOverlay textTitle="">
                  <OrderPage textButton={BACK} />
                </PageOverlay>
              }
            />
          }
        />
        <Route
          path={SIGN_IN}
          exact={true}
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
          exact={true}
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
          exact={true}
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
          exact={true}
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
          exact={true}
          element={
            <PageIngredient textTitle={DETAILS_INGREDIENT}>
              <IngredientDetails />
            </PageIngredient>
          }
        />
        <Route
          path={NOT_FOUND}
          exact={true}
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
              exact={true}
              element={
                <Modal isOpenModal={background} textTitle={DETAILS_INGREDIENT}>
                  <IngredientDetails />
                </Modal>
              }
            />
          </Routes>
        </>
      )}
      <Modal isOpenModal={order}>
        <OrderDetails />
      </Modal>
    </>
  );
}

export default App;
