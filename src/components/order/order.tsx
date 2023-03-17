import { FC, useCallback } from "react";
import {
  FormattedDate,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./order.module.css";
import { orderConstants } from "../../utils/constants";
import { TOrdersPage } from "../../utils/types";
import { useSelector } from "../../services/hooks";

const Order: FC<TOrdersPage> = ({ typeOrder, onOrder }) => {
  const {
    STATUS_COOK,
    STATUS_CREATED,
    STATUS_DONE,
    STATUS_DONE_ENG,
    STATUS_COOK_ENG,
    STATUS_CREATED_ENG,
    TYPE_ORDER_FEED,
  } = orderConstants;
  const { number, createdAt, ingredients, status } = onOrder;
  const ingredientsAll = useSelector(
    (store) => store.burgerIngredients.ingredients
  );
  const statusOrder = () => {
    switch (status) {
      case STATUS_DONE_ENG: {
        return STATUS_DONE;
      }
      case STATUS_COOK_ENG: {
        return STATUS_COOK;
      }
      case STATUS_CREATED_ENG: {
        return STATUS_CREATED;
      }
      default:
        return;
    }
  };

  /** данные заказа */
  const order = useCallback(() => {
    return ingredientsAll.filter((item) => {
      return ingredients.includes(item._id);
    });
  }, [ingredientsAll, ingredients]);

  /** итоговая сумма заказа */
  const handleSumOrder = useCallback(() => {
    return order()
      .map((item: any) => item.price)
      .reduce((acc, sum) => {
        return acc + sum;
      }, 0);
  }, [order]);

  /** список ингредиентов заказа  */
  const handleListNameIngredient = useCallback(() => {
    return order()
      .map((item) => item.name)
      .join(", ");
  }, [order]);

  const classNameCard =
    typeOrder === TYPE_ORDER_FEED
      ? `${styles.card} ${styles.card_type_order_feed} p-6 mb-6`
      : `${styles.card} ${styles.card_type_order_history} p-6 mb-6`;

  const classNameStatus = useCallback(() => {
    if (typeOrder === TYPE_ORDER_FEED) {
      return `${styles.card_status_hidden}`;
    } else {
      if (status === STATUS_DONE_ENG) {
        return `${styles.card_status} text text_type_main-small`;
      } else {
        return `text text_type_main-small`;
      }
    }
  }, [typeOrder, TYPE_ORDER_FEED, STATUS_DONE_ENG, status]);

  return (
    <div className={classNameCard}>
      <div className={styles.card_data}>
        <p className="text text_type_digits-default">{`#${number}`}</p>
        <FormattedDate
          className="text text_type_main-default text_color_inactive"
          date={new Date(createdAt)}
        />
      </div>
      <div className={styles.card_info}>
        <p
          className={`${styles.card_list_ingredients} text text_type_main-medium mb-2`}
        >
          {handleListNameIngredient()}
        </p>
        <p className={classNameStatus()}>{statusOrder()}</p>
      </div>
      <div className={styles.card_components_price}>
        <div className={styles.card_container_img}>
          {order().map((item, index) => {
            let zIndex = 6 - index;
            let left = index * 48;
            let display = index > 5 ? "none" : "";
            let rest = order().length - 6;
            return (
              <li
                className={styles.card_wrap}
                key={index}
                style={{ zIndex: zIndex, left: left, display: display }}
              >
                <img className={styles.card_img} alt="" src={item.image} />
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
          <p className="text text_type_digits-default mr-1">
            {handleSumOrder()}
          </p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
};

export default Order;
