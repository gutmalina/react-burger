import { useRef, FC } from "react";
import { useDispatch } from "../../services/hooks";
import { useDrag, useDrop } from "react-dnd";
import styles from "../render-burger-inside/render-burger-inside.module.css";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { removeBurgerFilling } from "../../services/actions/burger-constructor/burger-constructor";
import { TRenderBurgerInside } from "../../utils/types";

const RenderBurgerInside: FC<TRenderBurgerInside> = ({ card, index, moveCard }) => {
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  /** перетаскиваемый элемент - начинка бургера */
  const [{ isDragging }, dragRef] = useDrag({
    type: "element",
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  /** целевой контейнер - начинка бургера */
  const [, dropTargetRef] = useDrop({
    accept: "element",
    hover(item: { index: number }) {
      if (item.index === index) {
        return;
      }
      if (!ref.current) {
        return;
      }
      moveCard(item.index, index);
      item.index = index;
    },
  });

  const opacity = isDragging ? styles.opacity : "";

  dragRef(dropTargetRef(ref));

  return (
    <>
      <div ref={ref} className={`${styles.details_container} ${opacity}`}>
        <div className={styles.icon}>
          <DragIcon type="primary" />
        </div>
        <ConstructorElement
          text={card.name}
          price={card.price}
          thumbnail={card.image}
          extraClass="mb-4 ml-2"
          handleClose={() => {
            dispatch(removeBurgerFilling(card.keyid));
          }}
        />
      </div>
    </>
  );
};

export default RenderBurgerInside;
