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
  const { HOME, FEED, PROFILE } = pathConstants;
  const { CONSTRUCTOR, LIST_ORDER, PERSONAL_ACCOUNT } = headerConstants;

  return (
    <div className={styles.header}>
      <ul className={styles.nav}>
        <NavTab onTo={HOME} textSpan={CONSTRUCTOR}>
          <BurgerIcon type="primary" />
        </NavTab>
        <NavTab onTo={FEED} textSpan={LIST_ORDER}>
          <ListIcon type="secondary" />
        </NavTab>
        <div className={styles.logo}>
          <NavTab onTo={HOME}>
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
