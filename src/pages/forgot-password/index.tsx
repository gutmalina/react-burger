import { FC, FormEvent, useEffect } from "react";
import { useDispatch, useSelector } from "../../services/hooks";
import { useNavigate } from "react-router-dom";
import { forgotPasswordAction } from "../../services/actions/user/user";
import styles from "../page-overlay/page-overlay.module.css";
import {
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { inputConstants, pathConstants } from "../../utils/constants";
import { TPage } from "../../utils/types";
import { useForm } from "../../hooks/useForm";

const ForgotPasswordPage: FC<TPage> = ({ textButton }) => {
  const { EMAIL } = inputConstants;
  const { RESET } = pathConstants;
  const navigate = useNavigate();
  const isForgot = useSelector((store) => store.user.isForgot);
  const dispatch = useDispatch();
  const { values, handleChange } = useForm(
    { email: "" },
    { emailDisabled: true }
  );

  const handleSubmint = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(forgotPasswordAction(values.email));
  };

  useEffect(()=>{
    isForgot && navigate(RESET, { replace: true });
  }, [isForgot, navigate, RESET])

  return (
    <form className={styles.container_form} onSubmit={handleSubmint}>
      <fieldset className={styles.inputs}>
        <EmailInput
          placeholder={EMAIL}
          onChange={handleChange}
          value={values.email}
          name={"email"}
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
