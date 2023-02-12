import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { pathConstants } from "../../utils/constants";

function ProtectedRoute({ element }) {
  const isLoggedIn = useSelector((store) => store.user.isLoggedIn);
  const {SIGN_IN} = pathConstants;

  return isLoggedIn ? element : <Navigate to={SIGN_IN} replace />;
}

export default ProtectedRoute;
