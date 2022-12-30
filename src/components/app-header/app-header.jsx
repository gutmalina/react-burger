import styles from "./app-header.module.css";
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

function AppHeader() {
  return (
    <div className={styles.header}>
      <div className={`${styles.nav} pt-4 pb-4`}>
        <div className={styles.container}>
          <button type="button" className={`${styles.btn} mr-2`}>
            <BurgerIcon type="primary" />
            <span className="text text_type_main-default ml-2">
              Конструктор
            </span>
          </button>
          <button type="button" className={styles.btn}>
            <ListIcon type="secondary" />
            <span className="text text_type_main-default text_color_inactive ml-2">
              Лента заказов
            </span>
          </button>
        </div>
        <Logo />
        <button type="button" className={styles.btn}>
          <ProfileIcon type="secondary" />
          <span className="text text_type_main-default text_color_inactive ml-2">
            Личныйкабинет
          </span>
        </button>
      </div>
    </div>
  );
}

export default AppHeader;
