import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { forgotPasswordAction } from "../../services/actions/user";
import styles from "../page-overlay/page-overlay.module.css";
import {
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { inputConstants, pathConstants } from "../../utils/constants";
import { textType } from "../../types";

function ForgotPasswordPage({ textButton }) {
  const { EMAIL } = inputConstants;
  const { HOME, RESET } = pathConstants;
  const dispatch = useDispatch();
  const { isLoggedIn, isGetSuccess, isForgot } = useSelector((store) => ({
    isLoggedIn: store.user.isLoggedIn,
    isGetSuccess: store.user.isGetSuccess,
    isForgot: store.user.isForgot,
  }));
  const [value, setValue] = useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmint = (e) => {
    e.preventDefault();
    dispatch(forgotPasswordAction(value));
  };

  /** переадресация */
  if (isLoggedIn && isGetSuccess) {
    return <Navigate to={HOME} />;
  } else if (isForgot) {
    return <Navigate to={RESET} />;
  }

  return (
    <form className={styles.container_form} onSubmit={handleSubmint}>
      <fieldset className={styles.inputs}>
        <EmailInput
          placeholder={EMAIL}
          onChange={onChange}
          value={value}
          name={"email"}
          isIcon={false}
          extraClass="mb-4"
        />
      </fieldset>
      <Button htmlType="submit" type="primary" size="medium" extraClass="mb-20">
        {textButton}
      </Button>
    </form>
  );
}

ForgotPasswordPage.protoTypes = {
  textButton: textType.isRequired,
};

export { ForgotPasswordPage };
