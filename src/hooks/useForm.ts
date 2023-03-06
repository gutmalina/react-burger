import { useState, ChangeEvent, MouseEvent } from "react";

export function useForm(inputValues: any, inputDisabled: any) {
  const [values, setValues] = useState(inputValues);
  const [isDisabled, setIsDisabled] = useState(inputDisabled);
  const [isHiddenButton, setIsHiddenButton] = useState(true);

  /** изменения в input */
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  /** клик по иконке  */
  const handleClickIcon = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const name = e.currentTarget.id;
    const key = name + "Disabled";
    setIsDisabled({ ...isDisabled, [key]: false });
    setIsHiddenButton(false);
  };

  return {
    values,
    setValues,
    handleChange,
    isDisabled,
    setIsDisabled,
    handleClickIcon,
    isHiddenButton,
    setIsHiddenButton,
  };
}
