import { FC } from "react";
import { TPage } from "../../utils/types";
import Order from "../../components/order/order";
import ScrollBar from "../../components/scroll-bar/scroll-bar";
import { scrollBarConstants } from "../../utils/constants";

const OrderPage: FC<TPage> = ({textButton}) => {
  return (
    <>
    <ScrollBar typeScroll={scrollBarConstants.TYPE_ORDERS}>
      <Order/>
      <Order/>
      <Order/>
      <Order/>
      <Order/>
    </ScrollBar>

  </>
  )

}

export default OrderPage;
