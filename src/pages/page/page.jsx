import { NavForm } from "../nav-form/nav-form";
import styles from './page.module.css';
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";

function Page({
  textTitle,
  textButton,
  children
}){
  return(
    <section className={styles.main}>
      <h1 className="text text_type_main-medium mb-4">
        {textTitle}
      </h1>
      <form className={styles.container_form}>
        {children}
        <Button
          htmlType="button"
          type="primary"
          size="medium"
          extraClass="mb-20">
          {textButton}
        </Button>
      </form>
      <NavForm/>
    </section>
  );
};

export { Page };
