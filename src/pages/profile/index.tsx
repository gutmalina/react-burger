import { useEffect, FC, FormEvent, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { editProfileAction } from "../../services/actions/user";
import styles from "../page-overlay/page-overlay.module.css";
import {
  Input,
  EmailInput,
  PasswordInput,
  Button,
  EditIcon,
  CloseIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { inputConstants, tokenConstants } from "../../utils/constants";
import { TPage } from "../../utils/types";

const ProfilePage: FC<TPage> = ({ textButton, linkCancel }) => {
  const { NAME, LOGIN_NANE } = inputConstants;
  const { PASSWORD } = tokenConstants;
  const dispatch = useDispatch<any>();
  const { name, email } = useSelector((store: any) => store.user);
  const password = localStorage.getItem(PASSWORD);

  const {
    values,
    setValues,
    handleChange,
    isDisabled,
    setIsDisabled,
    handleClickIcon,
    isHiddenButton,
    setIsHiddenButton,
  } = useForm(
    { name, email, password },
    { nameDisabled: true, emailDisabled: true, passwordDisabled: true }
  );

  const buttonClassName = isHiddenButton
    ? styles.buttons_hidden
    : styles.buttons;

  /** обновить данные пользователя */
  const handleSubmint = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      editProfileAction({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );
  };

  /** скрыть кнопки и disabled input */
  const inactiveElement = useCallback(() => {
    setIsHiddenButton(true);
    setIsDisabled({
      nameDisabled: true,
      emailDisabled: true,
      passwordDisabled: true,
    });
  }, [setIsHiddenButton, setIsDisabled]);

  /** отменить изменения в полях Input и вернуть начальные значения */
  const cancelChanges = () => {
    setValues({ name, email, password });
    inactiveElement();
  };

  /** disabled input и button после обновления данных  */
  useEffect(() => {
    inactiveElement();
  }, [name, email, password, inactiveElement]);

  return (
    <form className={styles.container_form} onSubmit={handleSubmint}>
      <fieldset className={styles.inputs}>
        <div className={styles.input} onClick={handleClickIcon} id="name">
          <Input
            type={"text"}
            placeholder={NAME}
            value={values.name}
            onChange={handleChange}
            name={"name"}
            extraClass="mb-6"
            disabled={isDisabled.nameDisabled}
          />
          <div className={styles.icon}>
            {isDisabled.nameDisabled ? (
              <EditIcon type="primary" />
            ) : (
              <CloseIcon type="primary" />
            )}
          </div>
        </div>
        <div className={styles.input} onClick={handleClickIcon} id="email">
          <EmailInput
            placeholder={LOGIN_NANE}
            value={values.email}
            onChange={handleChange}
            name={"email"}
            extraClass="mb-6"
            disabled={isDisabled.emailDisabled}
          />
          <div className={styles.icon} onClick={handleClickIcon}>
            {isDisabled.emailDisabled ? (
              <EditIcon type="primary" />
            ) : (
              <CloseIcon type="primary" />
            )}
          </div>
        </div>
        <div className={styles.input} onClick={handleClickIcon} id="password">
          <PasswordInput
            value={values.password}
            onChange={handleChange}
            name={"password"}
            extraClass={`${styles.icon_password} "mb-4"`}
            autoComplete="true"
            disabled={isDisabled.passwordDisabled}
          />
          <div className={styles.icon} onClick={handleClickIcon}>
            {isDisabled.passwordDisabled ? (
              <EditIcon type="primary" />
            ) : (
              <CloseIcon type="primary" />
            )}
          </div>
        </div>
      </fieldset>
      <div className={buttonClassName}>
        <button
          type="button"
          className={`${styles.button_cancel} text text_type_main-default`}
          onClick={cancelChanges}
        >
          {linkCancel}
        </button>
        <Button htmlType="submit" type="primary" size="medium">
          {textButton}
        </Button>
      </div>
    </form>
  );
};

export default ProfilePage;
