import { FC, useEffect } from "react";
import { TPage } from "../../utils/types";
import Order from "../../components/element-order/order";
import ScrollBar from "../../components/scroll-bar/scroll-bar";
import { scrollBarConstants, orderConstants, pathConstants } from "../../utils/constants";
import { useDispatch, useSelector } from "../../services/hooks";
import { wsConnectionUserStart, wsConnectionClose } from "../../services/actions/ws-actions/ws-actions";
import { Link, useLocation } from "react-router-dom";
import styles from './orders.module.css';

const OrdersPage: FC<TPage> = ({textButton}) => {
  const { TYPE_ORDER_HISTORY } = orderConstants
  const {ORDER_HISTORY} = pathConstants;
  const { TYPE_ORDERS } = scrollBarConstants;
  const dispatch = useDispatch();
  const location = useLocation();
  const message = useSelector(store=> store.wsReducer.message);

  /** запрос по ws на заказы пользователя */
  useEffect(() => {
    dispatch(wsConnectionUserStart());

    return () => {
      dispatch(wsConnectionClose());
    };
  }, [dispatch]);

  if (!message) return <div>Обработка данных</div>;

  return (
    <>
      <ScrollBar typeScroll={TYPE_ORDERS}>
        {message.orders.map((order)=>(
          <Link
            key={order._id}
            to={`${ORDER_HISTORY}/:${order.number}`}
            state={{ background: location }}
            className={styles.link}>
            <Order
              onOrder={order}
              typeOrder={TYPE_ORDER_HISTORY}/>
          </Link>
        )).reverse()}
      </ScrollBar>
    </>
  )

}

export default OrdersPage;
