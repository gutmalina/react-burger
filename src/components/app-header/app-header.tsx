import { FC } from "react";
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app-header.module.css";
import NavTab from "../nav-tab/nav-tab";
import { headerConstants, pathConstants } from "../../utils/constants";

const AppHeader: FC = () => {
  const { HOME, NOT_FOUND, PROFILE, SIGN_IN } = pathConstants;
  const { CONSTRUCTOR, LIST_ORDER, PERSONAL_ACCOUNT } = headerConstants;

  return (
    <div className={styles.header}>
      <ul className={styles.nav}>
        <NavTab onTo={HOME} textSpan={CONSTRUCTOR}>
          <BurgerIcon type="primary" />
        </NavTab>
        <NavTab onTo={NOT_FOUND} textSpan={LIST_ORDER}>
          <ListIcon type="secondary" />
        </NavTab>
        <div className={styles.logo}>
          <NavTab onTo={SIGN_IN}>
            <Logo />
          </NavTab>
        </div>
        <NavTab onTo={PROFILE} textSpan={PERSONAL_ACCOUNT}>
          <ProfileIcon type="secondary" />
        </NavTab>
      </ul>
    </div>
  );
};

export default AppHeader;
