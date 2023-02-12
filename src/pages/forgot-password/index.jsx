import { useState } from "react";
import { forgotPasswordAction } from "../../services/actions/user";
import styles from '../page-overlay/page-overlay.module.css';
import {
  EmailInput,
  Button
} from "@ya.praktikum/react-developer-burger-ui-components";
import { inputConstants } from "../../utils/constants";
import { useDispatch } from "react-redux";

function ForgotPasswordPage({textButton}){
  const {EMAIL} = inputConstants;
  const dispatch = useDispatch();
  const [value, setValue] = useState('')
  const onChange = e => {
    setValue(e.target.value)
  };

  const handleSubmint = (e) => {
    e.preventDefault();
    dispatch(forgotPasswordAction(value))
  };

  return(
    <form
      className={styles.container_form}
      onSubmit={handleSubmint}>
      <fieldset className={styles.inputs}>
        <EmailInput
          placeholder={EMAIL}
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
