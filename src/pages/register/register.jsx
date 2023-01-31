import { useState } from "react";
import styles from './register.module.css';
import {
  Input,
  EmailInput,
  PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
  import { INPUT_NAME } from "../../utils/constants";

function RegisterPage(){
  const [value, setValue] = useState('')
  const onChange = e => {
    setValue(e.target.value)
  };

  return(
    <fieldset className={styles.inputs}>
      <Input
        type={'text'}
        placeholder={INPUT_NAME}
        onChange={onChange}
        icon={false}
        value={value}
        name={'name'}
        extraClass="mb-6"
      />
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

export { RegisterPage };
