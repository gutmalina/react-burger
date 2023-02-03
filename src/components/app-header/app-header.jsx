import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app-header.module.css";
import NavTab from "../nav-tab/nav-tab";
import {
  BUTTON_ICON_BURGER,
  BUTTON_ICON_LIST_ORDER,
  BUTTON_ICON_PROFILE,
  PATH_HOME,
  PATH_LOGIN,
  PATH_PROFILE,
  PATH_RESET_PASSWORD
} from '../../utils/constants';

function AppHeader() {
  return (
    <div className={styles.header}>
      <ul className={styles.nav}>
        <NavTab
          onTo={PATH_HOME}
          textSpan={BUTTON_ICON_BURGER}>
            <BurgerIcon type="primary"/>
        </NavTab>
        <NavTab
          onTo={PATH_RESET_PASSWORD}
          textSpan={BUTTON_ICON_LIST_ORDER}>
            <ListIcon type="secondary"/>
        </NavTab>
        <NavTab
          onTo={PATH_LOGIN}
          type='logo'>
          <Logo/>
        </NavTab>
        <NavTab
          onTo={PATH_PROFILE}
          textSpan={BUTTON_ICON_PROFILE}>
            <ProfileIcon type="secondary"/>
        </NavTab>
      </ul>
    </div>
  );
};

export default AppHeader;
