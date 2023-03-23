import { FC } from "react";
import { useSelector } from "../../services/hooks";
import styles from "./order-details.module.css";
import { textConstants } from "../../utils/constants";

const OrderDetails: FC = () => {
  const order = useSelector((store) => store.order.order);
  const { ORDER_DETAILS_ID, ORDER_DETAILS_STATUS, ORDER_DETAILS_WAIT } =
    textConstants;

  return (
    <>
      <p className="text text_type_digits-large mt-10 mb-8">{order}</p>
      <p className="text text_type_main-medium">{ORDER_DETAILS_ID}</p>
      <div className={styles.accpeted}></div>
      <p className="text text_type_main-default mb-2">{ORDER_DETAILS_STATUS}</p>
      <p className="text text_type_main-default text_color_inactive mb-30">
        {ORDER_DETAILS_WAIT}
      </p>
    </>
  );
};

export default OrderDetails;
