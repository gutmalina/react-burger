import { useEffect, useMemo, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  addBurgerBun,
  addBurgerFilling,
} from "../../services/actions/burger-constructor";
import { getOrderAction, sumOrder } from "../../services/actions/order";
import { scrollBarConstants } from "../../utils/constants";
import {
  buttonConstants,
  ingredientConstants,
  pathConstants,
  textConstants,
} from "../../utils/constants";
import { TIngredient } from "../../utils/types";

const BurgerConstructor: FC = () => {
  const { TYPE_DETAILS_ORDER } = scrollBarConstants;
  const { SAUCE_EN, MAIN_EN, BUN_EN, BUN_TOP, BUN_BOTTOM } = ingredientConstants;
  const { SIGN_IN } = pathConstants;
  const { SELECT_BUN, SELECT_FILLING } = textConstants;
  const summed = useSelector((store: any) => store.order.sum);
  const isLoggedIn = useSelector((store: any) => store.user.isLoggedIn);
  const { bun, filling } = useSelector((store: any) => store.burgerConstructor.burger);

  const dispatch = useDispatch<any>();
  const navigate = useNavigate();

  /** целевой контейнер для создания бургера */
  const [, dropTargetRef] = useDrop({
    accept: [BUN_EN, MAIN_EN, SAUCE_EN],
    drop(card: TIngredient) {
      card.type === BUN_EN
        ? dispatch(addBurgerBun(card))
        : dispatch(addBurgerFilling(card));
    },
  });

  /** получить ID ингридиентов бургера */
  const handleIdIngredient = useMemo(() => {
    const arrBurger = filling.concat(bun, bun);
    let result = arrBurger.map((a: TIngredient) => a._id);
    return result;
  }, [bun, filling]);

  const resultArr = (arr: []) => {
    return arr
      .map((a: any) => a.price)
      .reduce((acc, sum) => {
        return acc + sum;
      }, 0);
  };

  /** получить сумму заказа */
  const handleResult = useMemo(
    () => {
      let result;
      if (!bun.length) {
        result = resultArr(filling);
      } else {
        const arrBurger = filling.concat(bun, bun);
        result = resultArr(arrBurger);
      }
      return result;
    },
    [bun, filling]
  );

  useEffect(() => {
    dispatch(sumOrder(handleResult));
  }, [dispatch, handleResult]);

  /** передать заказ и получить номер заказа */
  const getNumberOrder = () => {
    if(handleIdIngredient.length){
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
        <ConstructorElement
          type="top"
          text={SELECT_BUN}
          price={bun}
          thumbnail=''
          extraClass={`${styles.element_default} mb-4`}
        />
      )}
      <ScrollBar typeScroll={TYPE_DETAILS_ORDER}>
        {filling.length ? (
          <ScrollBarConstructor arrayIngredients={filling || []} />
        ) : (
          <ConstructorElement
            price={filling}
            thumbnail=''
            text={SELECT_FILLING}
            extraClass={`${styles.element_default} mb-4`}
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
        <ConstructorElement
          type="bottom"
          text={SELECT_BUN}
          price={bun}
          thumbnail=''
          extraClass={`${styles.element_default} mt-1 mb-10`}
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
