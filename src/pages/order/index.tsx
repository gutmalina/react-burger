import { FC } from "react";
import { TPage } from "../../utils/types";
import ScrollBar from "../../components/scroll-bar/scroll-bar";
import { scrollBarConstants, orderConstants } from "../../utils/constants";
import { CurrencyIcon, FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './order.module.css';
import card1 from "../../images/order/bun-01.svg";
import card2 from "../../images/order/core.svg";
import card3 from "../../images/order/meat-03.svg";
import card4 from "../../images/order/salad.svg";
import card5 from "../../images/order/mineral rings.svg";
import card6 from "../../images/order/sauce-03.svg";

const OrderPage: FC<TPage> = () => {

  const today = new Date();

  return (
    <section className={styles.main}>
      <h1 className={`${styles.title} text text_type_digits-default`}>#034533</h1>
      <p className="text text_type_main-medium mb-3">Black Hole Singularity острый бургер</p>
      <p className="text text_type_main-default mb-15">Выполнен</p>
      <p className="text text_type_main-medium mb-6">Состав:</p>
      <ScrollBar typeScroll={scrollBarConstants.TYPE_ORDER}>
        <div className={`${styles.card_ingredient} mb-4`}>
          <img alt='' src={card1}></img>
          <p className="text text_type_main-default">Флюоресцентная булка R2-D3</p>
          <div className={styles.count}>
            <p className="text text_type_digits-default mr-2">2 x 20</p>
            <CurrencyIcon type="primary" />
          </div>
        </div>
        <div className={`${styles.card_ingredient} mb-4`}>
          <img alt='' src={card2}></img>
          <p className="text text_type_main-default">Флюоресцентная булка Флюоресцентнаяfffffff R2-D3</p>
          <div className={styles.count}>
            <p className="text text_type_digits-default mr-2">2 x 20</p>
            <CurrencyIcon type="primary" />
          </div>
        </div>
        <div className={`${styles.card_ingredient} mb-4`}>
          <img alt='' src={card3}></img>
          <p className="text text_type_main-default">Флюоресцентная R2-D3</p>
          <div className={styles.count}>
            <p className="text text_type_digits-default mr-2">2 x 1020</p>
            <CurrencyIcon type="primary" />
          </div>
        </div>
        <div className={`${styles.card_ingredient} mb-4`}>
          <img alt='' src={card4}></img>
          <p className="text text_type_main-default">булка R2-D3</p>
          <div className={styles.count}>
            <p className="text text_type_digits-default mr-2">2 x 220</p>
            <CurrencyIcon type="primary" />
          </div>
        </div>
        <div className={`${styles.card_ingredient} mb-4`}>
          <img alt='' src={card5}></img>
          <p className="text text_type_main-default">Флюоресцентная булка R2-D3</p>
          <div className={styles.count}>
            <p className="text text_type_digits-default mr-2">2 x 20</p>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </ScrollBar>
      <div className={`${styles.total} mt-10`}>
        <FormattedDate
            className="text text_type_main-default text_color_inactive"
            date={
              new Date(
                today.getFullYear(),
                today.getMonth(),
                today.getDate(),
                today.getHours(),
                today.getMinutes() - 1,
                0
              )
            }
          />
          <div className={styles.count}>
            <p className="text text_type_digits-default mr-2">510</p>
            <CurrencyIcon type="primary" />
          </div>
      </div>
    </section>
  )

}

export default OrderPage;
