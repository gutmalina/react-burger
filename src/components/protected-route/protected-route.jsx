import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { PATH_LOGIN } from "../../utils/constants";

function ProtectedRoute({ element }) {
  const loggedIn = useSelector((store) => store.user.loggedIn);

  return loggedIn ? element : <Navigate to={PATH_LOGIN} replace />;
}

export default ProtectedRoute;
