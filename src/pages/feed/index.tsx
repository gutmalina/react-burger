import { FC, useCallback, useEffect } from "react";
import { TPage } from "../../utils/types";
import Order from "../../components/order/order";
import ScrollBar from "../../components/scroll-bar/scroll-bar";
import { scrollBarConstants, orderConstants, textConstants } from "../../utils/constants";
import styles from './feed.module.css';
import { useDispatch, useSelector } from "../../services/hooks";
import { wsConnectionStart, wsConnectionClose } from "../../services/actions/ws-actions/ws-actions";
import NumberOrder from "../../components/number-order/number-order";

const FeedPage: FC<TPage> = ({textTitle}) => {
  const { STATUS_DONE_ENG, STATUS_COOK_ENG } = orderConstants;
  const {FEED_STATUS_DONE, FEED_STATUS_PENDING, FEED_TOTAL, FEED_TOTAL_TODAY} = textConstants;
  const {TYPE_ORDER_FEED} = orderConstants;
  const dispatch = useDispatch();
  const message = useSelector(store=> store.wsReducer.message);

  /** получить группу заказов по статусу выполнения*/
  const handleGroupOrders = useCallback((array: any, status: string)=>{
    return array?.filter((item: any) => item.status === status)
  }, [])

  /** запрос по ws на все заказы */
  useEffect(() => {
    dispatch(wsConnectionStart());

    return () => {
      dispatch(wsConnectionClose());
    };
  }, [dispatch]);

  return (
    <section className={styles.main}>
      <h1 className="text text_type_main-large mb-5">{textTitle}</h1>
      <div className={styles.group_info}>
        <ScrollBar typeScroll={scrollBarConstants.TYPE_FEED}>
          {message?.orders.map((order)=>(
            <Order
              key={order._id}
              onOrder={order}
              typeOrder={TYPE_ORDER_FEED}/>
          ))}
        </ScrollBar>
        <ul className={styles.container_all}>
          <li className={`${styles.board} ${styles.board_list_number}`}>
            <div>
              <p className="text text_type_main-medium mb-6">{FEED_STATUS_DONE}</p>
              <ul className={`${styles.list_number_order} ${styles.list_number_order_type_color}`}>
                <NumberOrder groupOrders={handleGroupOrders(message?.orders, STATUS_DONE_ENG)}/>
              </ul>
            </div>
            <div>
              <p className="text text_type_main-medium mb-6">{FEED_STATUS_PENDING}</p>
              <ul className={styles.list_number_order}>
                <NumberOrder groupOrders={handleGroupOrders(message?.orders, STATUS_COOK_ENG)}/>
              </ul>
            </div>
          </li>
          <li className={`${styles.board} ${styles.board_type_done}`}>
            <p className={`${styles.board_subtitle} text text_type_main-medium`}>{FEED_TOTAL}</p>
            <p className={`${styles.board_number} text text_type_digits-large`}>{message?.total}</p>
          </li>
          <li className={styles.board}>
            <p className={`${styles.board_subtitle} text text_type_main-medium`}>{FEED_TOTAL_TODAY}</p>
            <p className={`${styles.board_number} text text_type_digits-large`}>{message?.totalToday}</p>
          </li>
        </ul>
      </div>
    </section>
  )

}

export default FeedPage;
