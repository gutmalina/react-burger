import { FC } from "react";
import { TNumberOrder, TWsOrders } from "../../utils/types";

const NumberOrder: FC<TNumberOrder> = ({groupOrders}) => {

  return (
    <>
      {groupOrders?.slice(0, 20).map((order: TWsOrders)=>
      (
        <li
          key={order._id}
          className="text text_type_digits-default mb-2">{order.number}</li>
      ))}
    </>
  );
};

export default NumberOrder;
