import styles from './order-details.module.css';
import { orderType } from '../../types';

function OrderDetails({order}){
const {number} = {...order.order}
  return (
    <>
      <p className='text text_type_digits-large mt-10 mb-8'>
        {number}
      </p>
      <p className='text text_type_main-medium'>
        идентификатор заказа
      </p>
      <div className={styles.accpeted}></div>
      <p className='text text_type_main-default mb-2'>
        Ваш заказ начали готовить
      </p>
      <p className='text text_type_main-default text_color_inactive mb-30'>
        Дождитесь готовности на орбитальной станции
      </p>
    </>
  );
};

OrderDetails.propType = {
  isOrder: orderType.isRequired
};

export default OrderDetails;
