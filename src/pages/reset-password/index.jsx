import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { newPasswordAction } from "../../services/actions/user";
import styles from "../page-overlay/page-overlay.module.css";
import {
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { inputConstants, pathConstants } from "../../utils/constants";
import { textType } from "../../types";

function ResetPasswordPage({ textButton }) {
  const { WRITE_CODE, WRITE_NEW_PASSWORD } = inputConstants;
  const { HOME, FORGOT, SIGN_IN } = pathConstants;
  const dispatch = useDispatch();
  const { isLoggedIn, isGetSuccess, isForgot, isReset } = useSelector(
    (store) => ({
      isLoggedIn: store.user.isLoggedIn,
      isGetSuccess: store.user.isGetSuccess,
      isForgot: store.user.isForgot,
      isReset: store.user.isReset,
    })
  );
  const [valuePassword, setValuePassword] = useState("");
  const [valueCode, setValueCode] = useState("");

  const onChangePassword = (e) => {
    setValuePassword(e.target.value);
  };
  const onChangeCode = (e) => {
    setValueCode(e.target.value);
  };

  /** зарегистрировать пользователя */
  const handleSubmint = (e) => {
    e.preventDefault();
    dispatch(newPasswordAction({ password: valuePassword, code: valueCode }));
  };

  /** переадресация */
  if (isLoggedIn && isGetSuccess) {
    return <Navigate to={HOME} />;
  } else if (!isForgot) {
    return <Navigate to={FORGOT} />;
  } else if (isReset) {
    return <Navigate to={SIGN_IN} />;
  }

  return (
    <form className={styles.container_form} onSubmit={handleSubmint}>
      <fieldset className={styles.inputs}>
        <PasswordInput
          placeholder={WRITE_NEW_PASSWORD}
          onChange={onChangePassword}
          value={valuePassword}
          name={"password"}
          extraClass="mb-6"
          autoComplete="true"
        />
        <Input
          type={"text"}
          placeholder={WRITE_CODE}
          onChange={onChangeCode}
          icon={false}
          value={valueCode}
          name={"name"}
          extraClass="mb-4"
        />
      </fieldset>
      <Button htmlType="submit" type="primary" size="medium" extraClass="mb-20">
        {textButton}
      </Button>
    </form>
  );
}

ResetPasswordPage.protoTypes = {
  textButton: textType.isRequired,
};

export { ResetPasswordPage };
