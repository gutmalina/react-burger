import { FC, FormEvent } from "react";
import { useDispatch } from "../../services/hooks";
import { registrationAction } from "../../services/actions/user/user";
import styles from "../page-overlay/page-overlay.module.css";
import {
  Input,
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { inputConstants } from "../../utils/constants";
import { TPage } from "../../utils/types";
import { useForm } from "../../hooks/useForm";

const RegisterPage: FC<TPage> = ({ textButton }) => {
  const { NAME } = inputConstants;
  const dispatch = useDispatch();

  const { values, handleChange } = useForm(
    { name: "", email: "", password: "" },
    { nameDisabled: true, emailDisabled: true, passwordDisabled: true }
  );

  /** зарегистрировать пользователя */
  const handleSubmint = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(registrationAction({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );
  };

  return (
    <form className={styles.container_form} onSubmit={handleSubmint}>
      <fieldset className={styles.inputs}>
        <Input
          type={"text"}
          placeholder={NAME}
          onChange={handleChange}
          value={values.name}
          name={"name"}
          extraClass="mb-6"
        />
        <EmailInput
          onChange={handleChange}
          value={values.email}
          name={"email"}
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

export default RegisterPage;
