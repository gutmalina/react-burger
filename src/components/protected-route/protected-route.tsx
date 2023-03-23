import { FC } from "react";
import { useSelector } from "../../services/hooks";
import { Navigate, useLocation } from "react-router-dom";
import { pathConstants } from "../../utils/constants";
import { IRouter } from "../../utils/interface";

const ProtectedRoute: FC<IRouter> = ({ element, onlyUnAuth = false, ...rest }) => {
  const isGetUser = useSelector((store) => store.user.isGetUser);
  const { HOME, SIGN_IN } = pathConstants;
  const location = useLocation();
  const from = location.state?.from || HOME;

  /** Если разрешен неавторизованный доступ, а пользователь авторизован...*/
  if (onlyUnAuth && isGetUser) {
    return <Navigate to={from} />; //переход на предыдущую страницу
  }

  /** Если требуется авторизация, а пользователь не авторизован... */
  if (!onlyUnAuth && !isGetUser) {
    return <Navigate to={SIGN_IN} state={{ from: location }} />;
  }

  /** onlyUnAuth-true  isGetUser-false*/
  /** onlyUnAuth-false  isGetUser-true */
  return element;
};

export default ProtectedRoute;
