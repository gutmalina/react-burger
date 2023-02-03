import { useState } from "react";
import { useDispatch } from "react-redux";
import { registrationAction } from "../../services/actions/registration";
import styles from '../auth-page/auth-page.module.css';
import {
  Input,
  EmailInput,
  PasswordInput,
  Button
} from "@ya.praktikum/react-developer-burger-ui-components";
import { INPUT_NAME } from "../../utils/constants";

function RegisterPage({textButton}){
  const [valueName, setValueName] = useState('');
  const [valueEmail, setValueEmail] = useState('');
  const [valuePassword, setValuePassword] = useState('');
  const dispatch = useDispatch();

  const onChangeName = e => {
    setValueName(e.target.value);
  };
  const onChangeEmail = e => {
    setValueEmail(e.target.value)
  };
  const onChangePassword = e => {
    setValuePassword(e.target.value)
  };

  /** зарегистрировать пользователя */
  const handleSubmint = (e) => {
    e.preventDefault();
    dispatch(registrationAction({name: valueName, email: valueEmail, password: valuePassword}))
  };

  return(
    <form
      className={styles.container_form}
      onSubmit={handleSubmint}>
      <fieldset className={styles.inputs}>
        <Input
          type={'text'}
          placeholder={INPUT_NAME}
          onChange={onChangeName}
          icon={false}
          value={valueName}
          name={'name'}
          extraClass="mb-6"
        />
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

export { RegisterPage };
