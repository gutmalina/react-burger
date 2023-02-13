import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editProfileAction } from "../../services/actions/user";
import styles from "../page-overlay/page-overlay.module.css";
import {
  Input,
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { inputConstants, tokenConstants } from "../../utils/constants";
import { textType } from "../../types";

function ProfilePage({ buttonSave, linkCancel }) {
  const { NAME, LOGIN } = inputConstants;
  const { PASSWORD } = tokenConstants;
  const dispatch = useDispatch();
  const { name, email } = useSelector((store) => ({
    name: store.user.name,
    email: store.user.email,
  }));
  const password = localStorage.getItem(PASSWORD);

  const [valueName, setValueName] = useState(name || "");
  const [valueEmail, setValueEmail] = useState(email || "");
  const [valuePassword, setValuePassword] = useState(password || "");

  const [isDisabledName, setIsDisabledName] = useState(true);
  const [isDisabledEmail, setIsDisabledEmail] = useState(true);
  const [isDisabledPassword, setIsDisabledPassword] = useState(true);
  const [isHiddenButtons, setIsHiddenButton] = useState(true);

  const [iconPassword, setIconPassword] = useState("EditIcon");
  const buttonClassName = isHiddenButtons
    ? styles.buttons_hidden
    : styles.buttons;

  const onChangeName = (e) => {
    setValueName(e.target.value);
    setIsHiddenButton(false);
  };
  const onChangeEmail = (e) => {
    setValueEmail(e.target.value);
    setIsHiddenButton(false);
  };
  const onChangePassword = (e) => {
    setValuePassword(e.target.value);
    setIsHiddenButton(false);
  };

  /** обновить данные пользователя */
  const handleSubmint = (e) => {
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

  return (
    <form className={styles.container_form} onSubmit={handleSubmint}>
      <fieldset className={styles.inputs}>
        <Input
          type={"text"}
          placeholder={NAME}
          onChange={onChangeName}
          icon={isDisabledName ? "EditIcon" : "CloseIcon"}
          value={valueName}
          name={"name"}
          extraClass="mb-6"
          onIconClick={() => {
            setIsDisabledName(false);
          }}
          disabled={isDisabledName}
        />
        <EmailInput
          placeholder={LOGIN}
          onChange={onChangeEmail}
          value={valueEmail}
          name={"email"}
          icon={isDisabledEmail ? "EditIcon" : "CloseIcon"}
          extraClass="mb-6"
          onIconClick={() => {
            setIsDisabledEmail(false);
          }}
          disabled={isDisabledEmail}
        />
        <PasswordInput
          onChange={onChangePassword}
          value={valuePassword}
          name={"password"}
          icon={iconPassword}
          extraClass={`${styles.icon} "mb-4"`}
          autoComplete="true"
          onIconClick={() => {
            setIsDisabledPassword(false);
            setIconPassword("ShowIcon");
          }}
          disabled={isDisabledPassword}
        />
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
          {buttonSave}
        </Button>
      </div>
    </form>
  );
}

ProfilePage.protoTypes = {
  buttonSave: textType.isRequired,
  linkCancel: textType.isRequired,
};

export { ProfilePage };
