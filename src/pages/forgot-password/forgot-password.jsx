import { useState } from "react";
import styles from './forgot-password.module.css';
import { EmailInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { INPUT_EMAIL } from "../../utils/constants";

function ForgotPasswordPage(){
  const [value, setValue] = useState('')
  const onChange = e => {
    setValue(e.target.value)
  };

  return(
    <fieldset className={styles.inputs}>
      <EmailInput
        placeholder={INPUT_EMAIL}
        onChange={onChange}
        value={value}
        name={'email'}
        isIcon={false}
        extraClass="mb-4"
      />
    </fieldset>
  );
};

export { ForgotPasswordPage };
