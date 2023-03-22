import { FC } from "react";
import { TNumberOrder } from "../../utils/types";

const NumberOrder: FC<TNumberOrder> = ({groupOrders}) => {

  return (
    <>
      {groupOrders && groupOrders.slice(0, 20).map((order)=>
      (
        <li
          key={order._id}
          className="text text_type_digits-default mb-2">{order.number}</li>
      ))}
    </>
  );
};

export default NumberOrder;
