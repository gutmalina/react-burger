import { useState } from "react";
import { forgotPassword } from "../../services/actions/user";
import styles from '../auth-page/auth-page.module.css';
import {
  EmailInput,
  Button
} from "@ya.praktikum/react-developer-burger-ui-components";
import { INPUT_EMAIL } from "../../utils/constants";
import { useDispatch } from "react-redux";

function ForgotPasswordPage({textButton}){
  const dispatch = useDispatch();
  const [value, setValue] = useState('')
  const onChange = e => {
    setValue(e.target.value)
  };

  const handleSubmint = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(value))
  };

  return(
    <form
      className={styles.container_form}
      onSubmit={handleSubmint}>
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

export { ForgotPasswordPage };
