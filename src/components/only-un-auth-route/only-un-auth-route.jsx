import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { textType, childrenType, boolType } from "../../types";
import { pathConstants } from "../../utils/constants";

function OnlyUnAuthRoute({ redirectTo, element, onlyUnAuth }) {
  const location = useLocation();
  const { isForgot, isReset } = useSelector((store) => store.user);
  const { RESET, FORGOT, SIGN_IN } = pathConstants;

  if (onlyUnAuth) {
    return <Navigate to={redirectTo} state={{ from: location }} />;
  } else if (isForgot && location.pathname === FORGOT) {
    return <Navigate to={RESET} state={{ from: location }} />;
  } else if (!isForgot && location.pathname === RESET) {
    return <Navigate to={FORGOT} state={{ from: location }} />;
  } else if (isReset && location.pathname === RESET) {
    return <Navigate to={SIGN_IN} state={{ from: location }} />;
  } else {
    return element;
  }
}

OnlyUnAuthRoute.protoTypes = {
  redirectTo: textType.isRequired,
  element: childrenType.isRequired,
  onlyUnAuth: boolType.isRequired,
};

export default OnlyUnAuthRoute;
