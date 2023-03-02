import { useEffect, useState, FC, ChangeEvent, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
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

  const [valueName, setValueName] = useState(name || "");
  const [valueEmail, setValueEmail] = useState(email || "");
  const [valuePassword, setValuePassword] = useState(password);

  const [isDisabledName, setIsDisabledName] = useState(true);
  const [isDisabledEmail, setIsDisabledEmail] = useState(true);
  const [isDisabledPassword, setIsDisabledPassword] = useState(true);
  const [isHiddenButtons, setIsHiddenButton] = useState(true);

  const buttonClassName = isHiddenButtons
    ? styles.buttons_hidden
    : styles.buttons;

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setValueName(e.target.value);
    setIsHiddenButton(false);
  };
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setValueEmail(e.target.value);
    setIsHiddenButton(false);
  };
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setValuePassword(e.target.value);
    setIsHiddenButton(false);
  };

  /** обновить данные пользователя */
  const handleSubmint = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      editProfileAction({
        name: valueName,
        email: valueEmail,
        password: valuePassword,
      })
    );
  };

  /** скрыть кнопки, деактивировать поля ввода */
  const inactiveElement = () => {
    setIsDisabledName(true);
    setIsDisabledEmail(true);
    setIsDisabledPassword(true);
    setIsHiddenButton(true);
  };

  /** отменить изменения в полях Input и вернуть начальные значения */
  const cancelChanges = () => {
    setValueName(name);
    setValueEmail(email);
    setValuePassword(password);
    inactiveElement();
  };

  /** disabled input и button после обновления данных  */
  useEffect(() => {
    inactiveElement();
  }, [name, email]);

  /** изменение иконок инпутов */
  const clickNameInput = () => {
    setIsDisabledName(false);
    if (!isDisabledName) {
      setValueName("");
      setIsHiddenButton(false);
    }
  };

  const clickEmailInput = () => {
    setIsDisabledEmail(false);
    if (!isDisabledEmail) {
      setValueEmail("");
      setIsHiddenButton(false);
    }
  };

  const clickPasswordInput = () => {
    setIsDisabledPassword(false);
    if (!isDisabledPassword) {
      setValuePassword("");
      setIsHiddenButton(false);
    }
  };

  return (
    <form className={styles.container_form} onSubmit={handleSubmint}>
      <fieldset className={styles.inputs}>
        <div className={styles.input}>
          <Input
            type={"text"}
            placeholder={NAME}
            onChange={onChangeName}
            value={valueName}
            name={"name"}
            extraClass="mb-6"
            disabled={isDisabledName}
          />
          <div className={styles.icon} onClick={clickNameInput}>
            {isDisabledName ? (
              <EditIcon type="primary" />
            ) : (
              <CloseIcon type="primary" />
            )}
          </div>
        </div>
        <div className={styles.input}>
          <EmailInput
            placeholder={LOGIN_NANE}
            onChange={onChangeEmail}
            value={valueEmail}
            name={"email"}
            extraClass="mb-6"
            disabled={isDisabledEmail}
          />
          <div className={styles.icon} onClick={clickEmailInput}>
            {isDisabledEmail ? (
              <EditIcon type="primary" />
            ) : (
              <CloseIcon type="primary" />
            )}
          </div>
        </div>
        <div className={styles.input}>
          <PasswordInput
            onChange={onChangePassword}
            value={valuePassword || ""}
            name={"password"}
            extraClass={`${styles.icon_password} "mb-4"`}
            autoComplete="true"
            disabled={isDisabledPassword}
          />
          <div className={styles.icon} onClick={clickPasswordInput}>
            {isDisabledPassword ? (
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
