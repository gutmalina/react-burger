import { FC } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { IRouter } from "../../utils/interface";

const ProtectedRoute: FC<IRouter> = ({ redirectTo, element }) => {
  const isLoggedIn = useSelector((store: any) => store.user.isLoggedIn);
  const location = useLocation();

  return isLoggedIn ? (
    element
  ) : (
    <Navigate to={redirectTo} state={{ from: location }} />
  );
};

export default ProtectedRoute;
