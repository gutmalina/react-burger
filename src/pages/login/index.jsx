import { useState } from "react";
import { useDispatch } from "react-redux";
import { authenticationAction } from "../../services/actions/user";
import styles from '../page-overlay/page-overlay.module.css';
import {
  EmailInput,
  PasswordInput,
  Button
} from "@ya.praktikum/react-developer-burger-ui-components";

function LoginPage({textButton}){
  const dispatch = useDispatch();
  const [valueEmail, setValueEmail] = useState('');
  const [valuePassword, setValuePassword] = useState('');

  const onChangeEmail = e => {
    setValueEmail(e.target.value)
  };
  const onChangePassword = e => {
    setValuePassword(e.target.value)
  };

  const handleSubmint = (e) => {
    e.preventDefault();
    dispatch(authenticationAction({email: valueEmail, password: valuePassword}));
  };

  return (
    <form
      className={styles.container_form}
      onSubmit={handleSubmint}
      >
      <fieldset className={styles.inputs}>
        <EmailInput
          onChange={onChangeEmail}
          value={valueEmail}
          name={'email'}
          isIcon={false}
          extraClass="mb-6"
        />
        <PasswordInput
          onChange={onChangePassword}
          value={valuePassword}
          name={'password'}
          extraClass="mb-4"
          autoComplete='true'
        />
      </fieldset>
      <Button
        htmlType="submit"
        type="primary"
        size="medium"
        extraClass="mb-20">
        {textButton}
      </Button>
    </form>
  );
};

export { LoginPage };
