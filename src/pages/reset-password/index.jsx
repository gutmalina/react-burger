import { useState } from "react";
import { newPasswordAction } from "../../services/actions/user";
import styles from '../page-overlay/page-overlay.module.css';
import {
  Input,
  PasswordInput,
  Button
} from "@ya.praktikum/react-developer-burger-ui-components";
import { inputConstants } from "../../utils/constants";
import { useDispatch } from "react-redux";

function ResetPasswordPage({textButton}){
  const {WRITE_CODE, WRITE_NEW_PASSWORD} = inputConstants;
  const dispatch = useDispatch();
  const [valuePassword, setValuePassword] = useState('');
  const [valueCode, setValueCode] = useState('');

  const onChangePassword = e => {
    setValuePassword(e.target.value)
  };
  const onChangeCode = e => {
    setValueCode(e.target.value);
  };

  /** зарегистрировать пользователя */
  const handleSubmint = (e) => {
    e.preventDefault();
    dispatch(newPasswordAction({password: valuePassword, code: valueCode}));
  };

  return(
    <form
      className={styles.container_form}
      onSubmit={handleSubmint}>
      <fieldset className={styles.inputs}>
        <PasswordInput
          placeholder={WRITE_NEW_PASSWORD}
          onChange={onChangePassword}
          value={valuePassword}
          name={'password'}
          extraClass="mb-6"
          autoComplete='true'
        />
        <Input
          type={'text'}
          placeholder={WRITE_CODE}
          onChange={onChangeCode}
          icon={false}
          value={valueCode}
          name={'name'}
          extraClass="mb-4"
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

export { ResetPasswordPage };
