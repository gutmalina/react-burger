import { useState } from "react";
import styles from './login.module.css';
import {
  EmailInput,
  PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";

function LoginPage(){
  const [value, setValue] = useState('')
  const onChange = e => {
    setValue(e.target.value)
  };

  return (
    <fieldset className={styles.inputs}>
      <EmailInput
        onChange={onChange}
        value={value}
        name={'email'}
        isIcon={false}
        extraClass="mb-6"
      />
      <PasswordInput
        onChange={onChange}
        value={value}
        name={'password'}
        extraClass="mb-4"
      />
    </fieldset>
  );
};

export { LoginPage };
