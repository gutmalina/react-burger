import { FC, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { newPasswordAction } from "../../services/actions/user";
import styles from "../page-overlay/page-overlay.module.css";
import {
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { inputConstants } from "../../utils/constants";
import { TPage } from "../../utils/types";
import { useForm } from "../../hooks/useForm";

const ResetPasswordPage: FC<TPage> = ({ textButton }) => {
  const { WRITE_CODE, WRITE_NEW_PASSWORD } = inputConstants;
  const dispatch = useDispatch<any>();
  const { values, handleChange } = useForm(
    { password: "", code: "" },
    { passwordDisabled: true, codeDisabled: true }
  );

  /** зарегистрировать пользователя */
  const handleSubmint = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(newPasswordAction({ password: values.password, code: values.code }));
  };

  return (
    <form className={styles.container_form} onSubmit={handleSubmint}>
      <fieldset className={styles.inputs}>
        <PasswordInput
          placeholder={WRITE_NEW_PASSWORD}
          onChange={handleChange}
          value={values.password}
          name={"password"}
          extraClass="mb-6"
          autoComplete="true"
        />
        <Input
          type={"text"}
          placeholder={WRITE_CODE}
          onChange={handleChange}
          value={values.code}
          name={"code"}
          extraClass="mb-4"
        />
      </fieldset>
      <Button htmlType="submit" type="primary" size="medium" extraClass="mb-20">
        {textButton}
      </Button>
    </form>
  );
};

export default ResetPasswordPage;
