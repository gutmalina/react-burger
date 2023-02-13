import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { registrationAction } from "../../services/actions/user";
import styles from "../page-overlay/page-overlay.module.css";
import {
  Input,
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { inputConstants, pathConstants } from "../../utils/constants";
import { textType } from "../../types";

function RegisterPage({ textButton }) {
  const { NAME } = inputConstants;
  const [valueName, setValueName] = useState("");
  const [valueEmail, setValueEmail] = useState("");
  const [valuePassword, setValuePassword] = useState("");
  const dispatch = useDispatch();
  const { isLoggedIn, isGetSuccess } = useSelector((store) => ({
    isLoggedIn: store.user.isLoggedIn,
    isGetSuccess: store.user.isGetSuccess,
  }));

  const onChangeName = (e) => {
    setValueName(e.target.value);
  };
  const onChangeEmail = (e) => {
    setValueEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setValuePassword(e.target.value);
  };

  /** зарегистрировать пользователя */
  const handleSubmint = (e) => {
    e.preventDefault();
    dispatch(
      registrationAction({
        name: valueName,
        email: valueEmail,
        password: valuePassword,
      })
    );
  };

  /** переадресация на главную страницу после успешной регистрации */
  if (isLoggedIn && isGetSuccess) {
    return <Navigate to={pathConstants.HOME} />;
  }

  return (
    <form className={styles.container_form} onSubmit={handleSubmint}>
      <fieldset className={styles.inputs}>
        <Input
          type={"text"}
          placeholder={NAME}
          onChange={onChangeName}
          icon={false}
          value={valueName}
          name={"name"}
          extraClass="mb-6"
        />
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

RegisterPage.protoTypes = {
  textButton: textType.isRequired,
};

export { RegisterPage };
