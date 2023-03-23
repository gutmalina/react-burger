import { FC, useCallback } from "react";
import {
  FormattedDate,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./order.module.css";
import { orderConstants } from "../../utils/constants";
import { TOrdersPage, TIngredient } from "../../utils/types";
import { useDispatch, useSelector } from "../../services/hooks";
import { getOrderFeedAction } from "../../services/actions/order/order";

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
  const dispatch = useDispatch();

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

  /** получить данные ингредиентов по id в массив*/
  const handleIngredientsOrder = useCallback(() => {
    const ingredientsOrder: TIngredient[] = [];
    for (let i = 0; i < ingredients.length; i++) {
      const element: any = ingredientsAll.find(
        (item) => item._id === ingredients[i]
      );
      element.count = 1;
      if (element) {
        ingredientsOrder.push(element);
      }
    }
    return ingredientsOrder;
  }, [ingredientsAll, ingredients]);

  /** итоговая сумма заказа */
  const handleSumOrder = useCallback(() => {
    return handleIngredientsOrder()
      .map((item) => item.price)
      .reduce((acc, sum) => {
        return acc + sum;
      }, 0);
  }, [handleIngredientsOrder]);

  /** массив уникальных ингридиентов с указанием количества */
  const handleUniqueIngredients = Object.values(
    handleIngredientsOrder()
      .flat()
      .reduce((acc: any, item) => {
        if (!acc[item._id]) {
          acc[item._id] = { ...item };
        } else {
          acc[item._id].count = `${+acc[item._id].count + +item.count}`;
        }
        return acc;
      }, {})
  );

  /** список имён ингредиентов заказа  */
  const handleListNameIngredient = useCallback(() => {
    return handleUniqueIngredients.map((item: any) => item.name).join(", ");
  }, [handleUniqueIngredients]);

  const classNameCard =
    typeOrder === TYPE_ORDER_FEED
      ? `${styles.card} ${styles.card_type_order_feed} p-6 mb-6`
      : `${styles.card} ${styles.card_type_order_history} p-6 mb-6`;
  const classNameStatus =
    typeOrder === TYPE_ORDER_FEED
      ? `${styles.card_status_hidden}`
      : status === STATUS_DONE_ENG
      ? `${styles.card_status} text text_type_main-small`
      : `text text_type_main-small`;

  /** запрос на получение данных выбранного заказа */
  const sendNumberOrder = () => {
    dispatch(getOrderFeedAction(number));
  };

  if (!ingredientsAll) return <div>Обработка данных</div>;

  return (
    <div className={classNameCard} onClick={sendNumberOrder}>
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
        <p className={classNameStatus}>{statusOrder()}</p>
      </div>
      <div className={styles.card_components_price}>
        <div className={styles.card_container_img}>
          {handleUniqueIngredients.map((item: any, index) => {
            let zIndex = 6 - index;
            let left = index * 48;
            let display = index > 5 ? "none" : "";
            let rest = handleUniqueIngredients.length - 6;
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
