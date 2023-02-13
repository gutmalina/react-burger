import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { textType, childrenType } from "../../types";

function ProtectedRoute({ redirectTo, element }) {
  const isLoggedIn = useSelector((store) => store.user.isLoggedIn);
  const location = useLocation();

  return isLoggedIn ? (
    element
  ) : (
    <Navigate to={redirectTo} state={{ from: location }} />
  );
}

ProtectedRoute.protoTypes = {
  redirectTo: textType.isRequired,
  element: childrenType.isRequired,
};

export default ProtectedRoute;
