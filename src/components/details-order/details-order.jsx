import styles from './details-order.module.css';
import imgThree from '../../images/sauce-03.svg';
import {
  ConstructorElement,
  DragIcon
} from "@ya.praktikum/react-developer-burger-ui-components";
import { detailsOrder } from '../../utils/detailOrder';

function DetailsOrder(){
  return (
    <>
        {
          detailsOrder.map((card) => (
            <div{...card} key={card._id}>
              <DragIcon type="primary" />
              <ConstructorElement
                text={card.name}
                price={card.price}
                thumbnail={card.image}
                extraClass='mb-4 ml-2'
              />
            </div>
          ))
        }
    </>
  );
};

export default DetailsOrder;
