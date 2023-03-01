import { useState, FC, ChangeEvent, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { registrationAction } from "../../services/actions/user";
import styles from "../page-overlay/page-overlay.module.css";
import {
  Input,
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { inputConstants } from "../../utils/constants";
import { TPage } from "../../utils/types";

const RegisterPage: FC<TPage> = ({ textButton }) => {
  const { NAME } = inputConstants;
  const [valueName, setValueName] = useState("");
  const [valueEmail, setValueEmail] = useState("");
  const [valuePassword, setValuePassword] = useState("");
  const dispatch = useDispatch<any>();

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setValueName(e.target.value);
  };
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setValueEmail(e.target.value);
  };
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setValuePassword(e.target.value);
  };

  /** зарегистрировать пользователя */
  const handleSubmint = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(registrationAction({
        name: valueName,
        email: valueEmail,
        password: valuePassword,
      })
    );
  };

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
};

export default RegisterPage;
