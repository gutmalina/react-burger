import { FC } from "react";
import {
  FormattedDate,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./order.module.css";
import { orderConstants } from "../../utils/constants";
import card1 from "../../images/order/bun-01.svg";
import card2 from "../../images/order/core.svg";
import card3 from "../../images/order/meat-03.svg";
import card4 from "../../images/order/salad.svg";
import card5 from "../../images/order/mineral rings.svg";
import card6 from "../../images/order/sauce-03.svg";

const Order: FC = () => {
  const { STATUS_COOK, STATUS_CREATED, STATUS_DONE } = orderConstants;
  const today = new Date();
  const arrayCards = [
    card1,
    card2,
    card3,
    card4,
    card5,
    card6,
    card1,
    card5,
    card5,
  ];
  const classNameStatus = STATUS_DONE
    ? `{${styles.status} text text_type_main-small}`
    : `text text_type_main-small`;

  return (
    <div className={`${styles.card} p-6 mb-6`}>
      <div className={styles.card_data}>
        <p className="text text_type_digits-default">#034534</p>
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
      </div>
      <div className={styles.card_info}>
        <p className="text text_type_main-medium mb-2">Interstellar бургер</p>
        <p className={classNameStatus}>{STATUS_COOK}</p>
      </div>
      <div className={styles.card_components_price}>
        <div className={styles.card_container_img}>
          {arrayCards.map((card, index) => {
            let zIndex = 6 - index;
            let left = index * 48;
            let display = index > 5 ? "none" : "";
            let rest = arrayCards.length - 6;
            return (
              <li
                className={styles.card_wrap}
                key={index}
                style={{ zIndex: zIndex, left: left, display: display }}
              >
                <img className={styles.card_img} alt="" src={card} />
                {index === 5 ? (
                  <span
                    className={`${styles.card_span} text text_type_main-default`}
                  >{`+${rest}`}</span>
                ) : null}
              </li>
            );
          })}
        </div>
        <div className={styles.card_price}>
          <p className="text text_type_digits-default mr-1">560</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
};

export default Order;
