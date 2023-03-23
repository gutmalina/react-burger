import { useEffect, useMemo, FC } from "react";
import { useDispatch, useSelector } from "../../services/hooks";
import { useNavigate } from "react-router-dom";
import { useDrop } from "react-dnd/dist/hooks/useDrop";
import {
  ConstructorElement,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import ScrollBar from "../scroll-bar/scroll-bar";
import ScrollBarConstructor from "../scroll-bar-constructor/scroll-bar-constructor";
import {
  addBurgerBunAction,
  addBurgerFillingAction,
} from "../../services/actions/burger-constructor/burger-constructor";
import { getOrderAction, sumOrderAction } from "../../services/actions/order/order";
import { scrollBarConstants } from "../../utils/constants";
import {
  buttonConstants,
  ingredientConstants,
  pathConstants,
  textConstants,
  elementConstants,
} from "../../utils/constants";
import { TIngredient } from "../../utils/types";
import ElementBurger from "../element-burger/element-burger";

const BurgerConstructor: FC = () => {
  const { TYPE_DETAILS_ORDER } = scrollBarConstants;
  const { SAUCE_EN, MAIN_EN, BUN_EN, BUN_TOP, BUN_BOTTOM } =ingredientConstants;
  const { SIGN_IN } = pathConstants;
  const { SELECT_BUN, SELECT_FILLING } = textConstants;
  const { TYPE_ELEMENT_TOP, TYPE_ELEMENT_CENTER, TYPE_ELEMENT_BOTTOM } =elementConstants;
  const summed = useSelector((store) => store.order.sum);
  const isLoggedIn = useSelector((store) => store.user.isLoggedIn);
  const { bun, filling } = useSelector(
    (store) => store.burgerConstructor.burger
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  /** целевой контейнер для создания бургера */
  const [, dropTargetRef] = useDrop({
    accept: [BUN_EN, MAIN_EN, SAUCE_EN],
    drop(card: TIngredient) {
      card.type === BUN_EN
        ? dispatch(addBurgerBunAction(card))
        : dispatch(addBurgerFillingAction(card));
    },
  });

  /** получить ID ингридиентов бургера */
  const handleIdIngredient = useMemo(() => {
    const arrBurger = filling.concat(bun, bun);
    let result = arrBurger.map((a) => a._id);
    return result;
  }, [bun, filling]);

  const resultArr = (arr: TIngredient[]) => {
    return arr
      .map((a) => a.price)
      .reduce((acc, sum) => {
        return acc + sum;
      }, 0);
  };

  /** получить сумму заказа */
  const handleResult = useMemo(() => {
    let result;
    if (!bun.length) {
      result = resultArr(filling);
    } else {
      const arrBurger = filling.concat(bun, bun);
      result = resultArr(arrBurger);
    }
    return result;
  }, [bun, filling]);

  useEffect(() => {
    dispatch(sumOrderAction(handleResult));
  }, [dispatch, handleResult]);

  /** передать заказ и получить номер заказа */
  const getNumberOrder = () => {
    if (handleIdIngredient.length) {
      if (isLoggedIn) {
        dispatch(getOrderAction(handleIdIngredient));
      } else {
        navigate(SIGN_IN, { replace: true });
      }
    }
  };

  return (
    <div ref={dropTargetRef} className={styles.container}>
      {bun.length ? (
        <ConstructorElement
          type="top"
          isLocked={true}
          text={`${bun[0].name} ${BUN_TOP}`}
          price={bun[0].price}
          thumbnail={bun[0].image}
          extraClass={`${styles.element} mb-4`}
        />
      ) : (
        <ElementBurger typeElement={TYPE_ELEMENT_TOP} typeSelect={SELECT_BUN} />
      )}
      <ScrollBar typeScroll={TYPE_DETAILS_ORDER}>
        {filling.length ? (
          <ScrollBarConstructor arrayIngredients={filling || []} />
        ) : (
          <ElementBurger
            typeElement={TYPE_ELEMENT_CENTER}
            typeSelect={SELECT_FILLING}
          />
        )}
      </ScrollBar>
      {bun.length ? (
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={`${bun[0].name} ${BUN_BOTTOM}`}
          price={bun[0].price}
          thumbnail={bun[0].image}
          extraClass={`${styles.element} mt-1 mb-10`}
        />
      ) : (
        <ElementBurger
          typeElement={TYPE_ELEMENT_BOTTOM}
          typeSelect={SELECT_BUN}
        />
      )}

      <article className={`${styles.order} mr-4`}>
        <span className={`${styles.result} text text_type_digits-medium`}>
          {summed || 0}
        </span>
        <CurrencyIcon type="primary" />
        <Button
          htmlType="button"
          type="primary"
          size="large"
          extraClass={styles.btn}
          onClick={getNumberOrder}
        >
          {buttonConstants.MAKE_ORDER}
        </Button>
      </article>
    </div>
  );
};

export default BurgerConstructor;
