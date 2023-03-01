import { useState, FC, ChangeEvent, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { authenticationAction } from "../../services/actions/user";
import styles from "../page-overlay/page-overlay.module.css";
import {
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { TPage } from "../../utils/types";

const LoginPage: FC<TPage> = ({ textButton }) => {
  const dispatch = useDispatch<any>();
  const [valueEmail, setValueEmail] = useState<string>("");
  const [valuePassword, setValuePassword] = useState<string>("");

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setValueEmail(e.target.value);
  };
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setValuePassword(e.target.value);
  };

  const handleSubmint = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      authenticationAction({ email: valueEmail, password: valuePassword })
    );
  };

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
};

export default LoginPage;
