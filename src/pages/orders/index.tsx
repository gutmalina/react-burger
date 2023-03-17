import { FC, useEffect } from "react";
import { TPage } from "../../utils/types";
import Order from "../../components/order/order";
import ScrollBar from "../../components/scroll-bar/scroll-bar";
import { scrollBarConstants, orderConstants } from "../../utils/constants";
import { useDispatch, useSelector } from "../../services/hooks";
import { wsConnectionUserStart, wsConnectionClose } from "../../services/actions/ws-actions/ws-actions";

const OrdersPage: FC<TPage> = ({textButton}) => {
  const { TYPE_ORDER_HISTORY } = orderConstants
  const dispatch = useDispatch();
  const message = useSelector(store=> store.wsReducer.message);

  /** запрос по ws на заказы пользователя */
  useEffect(() => {
    dispatch(wsConnectionUserStart());

    return () => {
      dispatch(wsConnectionClose());
    };
  }, [dispatch]);

  return (
    <>
    <ScrollBar typeScroll={scrollBarConstants.TYPE_ORDERS}>
      {message?.orders.map((order)=>(
        <Order
          key={order._id}
          onOrder={order}
          typeOrder={TYPE_ORDER_HISTORY}/>
      )).reverse()}
    </ScrollBar>
  </>
  )

}

export default OrdersPage;
