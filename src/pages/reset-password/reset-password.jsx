import { useState } from "react";
import styles from './reset-password.module.css';
import {
  Input,
  PasswordInput
} from "@ya.praktikum/react-developer-burger-ui-components";
import {
  INPUT_WRITE_NEW_PASSWORD,
  INPUT_WRITE_CODE
} from "../../utils/constants";

function ResetPasswordPage(){
  const [value, setValue] = useState('')
  const onChange = e => {
    setValue(e.target.value)
  };

  return(
    <fieldset className={styles.inputs}>
      <PasswordInput
        placeholder={INPUT_WRITE_NEW_PASSWORD}
        onChange={onChange}
        value={value}
        name={'password'}
        extraClass="mb-6"
      />
      <Input
        type={'text'}
        placeholder={INPUT_WRITE_CODE}
        onChange={onChange}
        icon={false}
        value={value}
        name={'name'}
        extraClass="mb-4"
      />
    </fieldset>
  );
};

export { ResetPasswordPage };
