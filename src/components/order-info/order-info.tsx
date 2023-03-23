import { FC, useCallback, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { TPage } from "../../utils/types";
import ScrollBar from "../scroll-bar/scroll-bar";
import {
  scrollBarConstants,
  orderConstants,
  textConstants,
} from "../../utils/constants";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./order-info.module.css";
import { useDispatch, useSelector } from "../../services/hooks";
import IngredientInOrder from "../ingredient-in-order/ingredient-in-order";
import { TIngredient } from "../../utils/types";
import { getOrderFeedAction } from "../../services/actions/order/order";

const OrderInfo: FC<TPage> = () => {
  const {
    STATUS_DONE_ENG,
    STATUS_COOK_ENG,
    STATUS_CREATED_ENG,
    STATUS_DONE,
    STATUS_COOK,
    STATUS_CREATED,
  } = orderConstants;
  const { ORDER_INFO_STRUCTURE } = textConstants;
  const { TYPE_ORDER } = scrollBarConstants
  const orderFeed = useSelector((store) => store.order.orderFeed);
  const ingredientsAll = useSelector(
    (store) => store.burgerIngredients.ingredients
  );
  const {number, name, createdAt} = orderFeed[0] || ''
  const location = useLocation();
  const { id } = useParams();
  const dispatch = useDispatch();

  const statusOrder = () => {
    if(orderFeed[0]){
      switch (orderFeed[0].status) {
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
    }
  };

  /** получить данные ингредиентов по id в массив*/
  const handleIngredientsOrder = useCallback(() => {
    const ingredientsOrder: TIngredient[] = [];
    if(orderFeed[0] && ingredientsAll){
      for (let i = 0; i < orderFeed[0].ingredients.length; i++) {
        const element: any = ingredientsAll.find(
          (item) => item._id === orderFeed[0].ingredients[i]
        );
        element.count = 1;
        if (element) {
          ingredientsOrder.push(element);
        }
      }
    }
    return ingredientsOrder;
  }, [ingredientsAll, orderFeed]);

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

  /** итоговая сумма заказа */
  const handleSumOrder = useCallback(() => {
    return handleIngredientsOrder()
      .map((item) => item.price)
      .reduce((acc, sum) => {
        return acc + sum;
      }, 0);
  }, [handleIngredientsOrder]);

  const classNameContainer = location.state
    ? `${styles.container} ${styles.container_modal}`
    : `${styles.container} ${styles.container_page}`;
  const classNameTitle = location.state
    ? `${styles.title} ${styles.title_modal} text text_type_digits-default`
    : `${styles.title} text text_type_digits-default`;
  const classNameSubtitle = location.state
    ? `${styles.subtitle} ${styles.subtitle_modal} text text_type_main-medium mb-2`
    : `${styles.subtitle} ${styles.subtitle_page} text text_type_main-medium mb-3`;
  const classNameStatus =
    orderFeed[0]?.status === STATUS_DONE_ENG
      ? `${styles.status} text text_type_main-default mb-15`
      : `text text_type_main-default mb-15`;

  /** запрос данных по выбранному заказу при прямом переходе на страницу */
  useEffect(() => {
    id && dispatch(getOrderFeedAction(id.slice(1)));
  }, [dispatch, id]);

  if (!ingredientsAll && !orderFeed[0]) return <div>Обработка данных</div>;

  return (
    <section className={classNameContainer}>
      <h1 className={classNameTitle}>#{number}</h1>
      <p className={classNameSubtitle}>{name}</p>
      <p className={classNameStatus}>{statusOrder()}</p>
      <p className="text text_type_main-medium mb-6">{ORDER_INFO_STRUCTURE}</p>
      <ScrollBar typeScroll={TYPE_ORDER}>
        {handleUniqueIngredients.map((ingredient: any) => (
          <IngredientInOrder key={ingredient._id} ingredient={ingredient} />
        ))}
      </ScrollBar>
      <div className={`${styles.total} mt-10 mb-10`}>
        <FormattedDate
          className="text text_type_main-default text_color_inactive"
          date={new Date(createdAt)}
        />
        <div className={styles.count}>
          <p className="text text_type_digits-default mr-2">
            {handleSumOrder()}
          </p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </section>
  );
};

export default OrderInfo;
