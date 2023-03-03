import { FC, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { authenticationAction } from "../../services/actions/user";
import styles from "../page-overlay/page-overlay.module.css";
import {
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { TPage } from "../../utils/types";
import { useForm } from "../../hooks/useForm";

const LoginPage: FC<TPage> = ({ textButton }) => {
  const dispatch = useDispatch<any>();
  const { values, handleChange } = useForm(
    { email: "", password: "" },
    { emailDisabled: true, passwordDisabled: true }
  );

  const handleSubmint = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      authenticationAction({ email: values.email, password: values.password })
    );
  };

  return (
    <form className={styles.container_form} onSubmit={handleSubmint}>
      <fieldset className={styles.inputs}>
        <EmailInput
          onChange={handleChange}
          value={values.email}
          name={"email"}
          isIcon={false}
          extraClass="mb-6"
        />
        <PasswordInput
          onChange={handleChange}
          value={values.password}
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
