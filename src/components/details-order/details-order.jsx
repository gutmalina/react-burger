import {
  ConstructorElement,
  DragIcon
} from "@ya.praktikum/react-developer-burger-ui-components";

function DetailsOrder({arrDetailsOrder}){
  return (
    <>
        {
          arrDetailsOrder.map((card) => (
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
