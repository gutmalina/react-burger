import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";
import { authenticationAction } from "../../services/actions/user";
import styles from "../page-overlay/page-overlay.module.css";
import {
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { pathConstants } from "../../utils/constants";
import { textType } from "../../types";

function LoginPage({ textButton }) {
  const dispatch = useDispatch();
  const [valueEmail, setValueEmail] = useState("");
  const [valuePassword, setValuePassword] = useState("");
  const { isLoggedIn, isGetSuccess } = useSelector((store) => ({
    isLoggedIn: store.user.isLoggedIn,
    isGetSuccess: store.user.isGetSuccess,
  }));
  const location = useLocation();

  const onChangeEmail = (e) => {
    setValueEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setValuePassword(e.target.value);
  };

  const handleSubmint = (e) => {
    e.preventDefault();
    dispatch(
      authenticationAction({ email: valueEmail, password: valuePassword })
    );
  };

  /** переадресация на ранее закрытый маршрут после успешной авторизации */
  if (isLoggedIn && isGetSuccess) {
    return <Navigate to={location.state?.from || pathConstants.HOME} />;
  }

  return (
    <form className={styles.container_form} onSubmit={handleSubmint}>
      <fieldset className={styles.inputs}>
        <EmailInput
          onChange={onChangeEmail}
          value={valueEmail}
          name={"email"}
          isIcon={false}
          extraClass="mb-6"
        />
        <PasswordInput
          onChange={onChangePassword}
          value={valuePassword}
          name={"password"}
          extraClass="mb-4"
          autoComplete="true"
        />
      </fieldset>
      <Button htmlType="submit" type="primary" size="medium" extraClass="mb-20">
        {textButton}
      </Button>
    </form>
  );
}

LoginPage.protoTypes = {
  textButton: textType.isRequired,
};

export { LoginPage };
