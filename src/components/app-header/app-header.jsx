import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app-header.module.css";
import NavTab from "../nav-tab/nav-tab";
import { headerConstants, pathConstants } from "../../utils/constants";

function AppHeader() {
  const {HOME, NOT_FOUND, PROFILE} = pathConstants;
  
  return (
    <div className={styles.header}>
      <ul className={styles.nav}>
        <NavTab
          onTo={HOME}
          textSpan={headerConstants.CONSTRUCTOR}>
            <BurgerIcon type="primary"/>
        </NavTab>
        <NavTab
          onTo={NOT_FOUND}
          textSpan={headerConstants.LIST_ORDER}>
            <ListIcon type="secondary"/>
        </NavTab>
        <div className={styles.logo}>
          <Logo/>
        </div>
        <NavTab
          onTo={PROFILE}
          textSpan={headerConstants.PERSONAL_ACCOUNT}>
            <ProfileIcon type="secondary"/>
        </NavTab>
      </ul>
    </div>
  );
};

export default AppHeader;
