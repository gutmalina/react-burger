import { useState } from "react";
import { useSelector } from "react-redux";
import styles from '../auth-page/auth-page.module.css';
import {
  Input,
  EmailInput,
  PasswordInput,
  Button
} from "@ya.praktikum/react-developer-burger-ui-components";
import {
  INPUT_NAME,
  INPUT_LOGIN
 } from "../../utils/constants";


function ProfilePage({
  textButtonSave,
  textButtonCancel
}){
  const { name, email } = useSelector(store=>({
    name: store.user.userName,
    email: store.user.userEmail}));
  const [valueName, setValueName] = useState(name);
  const [valueEmail, setValueEmail] = useState(email);
  const [valuePassword, setValuePassword] = useState('');

  const onChangeName = e => {
    setValueName(e.target.value);
  };
  const onChangeEmail = e => {
    setValueEmail(e.target.value)
  };
  const onChangePassword = e => {
    setValuePassword(e.target.value)
  };

  /** обновить данные пользователя */
  const handleSubmint = (e) => {
    e.preventDefault();
  };

  return (
    <form
      className={styles.container_form}
      onSubmit={handleSubmint}>
      <fieldset className={styles.inputs}>
        <Input
          type={'text'}
          placeholder={INPUT_NAME}
          onChange={onChangeName}
          icon="EditIcon"
          value={valueName}
          name={'name'}
          extraClass="mb-6"
        />
        <EmailInput
          placeholder={INPUT_LOGIN}
          onChange={onChangeEmail}
          value={valueEmail}
          name={'email'}
          icon="EditIcon"
          extraClass="mb-6"
        />
        <PasswordInput
          onChange={onChangePassword}
          value={valuePassword}
          name={'password'}
          icon="EditIcon"
          extraClass="mb-4"
          autoComplete='true'
        />
      </fieldset>
      <div className={styles.buttons}>
        <button
          type="button"
          className={`${styles.button_cancel} text text_type_main-default`}>
          {textButtonCancel}
        </button>
        <Button
          htmlType="submit"
          type="primary"
          size="medium">
          {textButtonSave}
        </Button>
      </div>
    </form>
  );
};

export { ProfilePage };
