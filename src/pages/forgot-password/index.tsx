import { useState, FC, ChangeEvent, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { forgotPasswordAction } from "../../services/actions/user";
import styles from "../page-overlay/page-overlay.module.css";
import {
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { inputConstants } from "../../utils/constants";
import { TPage } from "../../utils/types";

const ForgotPasswordPage: FC<TPage> = ({ textButton }) => {
  const { EMAIL } = inputConstants;
  const dispatch = useDispatch<any>();
  const [value, setValue] = useState<string>("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmint = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(forgotPasswordAction(value));
  };

  return (
    <form className={styles.container_form} onSubmit={handleSubmint}>
      <fieldset className={styles.inputs}>
        <EmailInput
          placeholder={EMAIL}
          onChange={onChange}
          value={value}
          name={"email"}
          isIcon={false}
          extraClass="mb-4"
        />
      </fieldset>
      <Button htmlType="submit" type="primary" size="medium" extraClass="mb-20">
        {textButton}
      </Button>
    </form>
  );
};

export default ForgotPasswordPage;
