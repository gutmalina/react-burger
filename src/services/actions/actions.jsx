import { getIngredients, getOrder } from "../../utils/burger-api";
export const GET_INGREDIENTS = 'GET_INGREDIENTS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_BURGER = 'GET_BURGER';
export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';
export const MAKE_ORDER = 'MAKE_ORDER';
export const MAKE_ORDER_FAILED = 'MAKE_ORDER_FAILED';
export const MAKE_ORDER_SUCCESS = 'MAKE_ORDER_SUCCESS';
export const CLOSE_ORDER = 'CLOSE_ORDER';

export function getIngredientsAction() {
  return function(dispatch) {
    dispatch({
      type: GET_INGREDIENTS
    })
    getIngredients()
      .then( res  => {
        if (res && res.success) {
          dispatch({
            type: GET_INGREDIENTS_SUCCESS,
            ingredients: res.data
          })
        } else {
          dispatch({
            type: GET_INGREDIENTS_FAILED
          })
        }
      })
      .catch( err => {
        dispatch({
            type: GET_INGREDIENTS_FAILED
        })
      })
  }
};

export const addIngredient = (ingredient) => ({
  type: ADD_INGREDIENT,
  ingredient: ingredient
});

export const removeIngredient = () => ({
  type: REMOVE_INGREDIENT,
  ingredient: {}
});

export function getOrderAction(idIngredients) {
  return function(dispatch) {
    dispatch({
      type: MAKE_ORDER
    })
    getOrder(idIngredients)
      .then( res  => {
        if (res && res.success) {
          dispatch({
            type: MAKE_ORDER_SUCCESS,
            order: res
          })
        } else {
          dispatch({
            type: MAKE_ORDER_FAILED
          })
        }
      })
      .catch( err => {
        dispatch({
            type: MAKE_ORDER_FAILED
        })
      })
  }
};

export const closeOrder = () => ({
  type: CLOSE_ORDER,
  order: {},
  orderFailed: false,
  orderRequest: false
})
