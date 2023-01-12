import PropTypes from 'prop-types';

export const textType = PropTypes.string;
export const childrenType = PropTypes.element;
export const boolType = PropTypes.bool;
export const functionType = PropTypes.func;
export const groupIngredientsType = PropTypes.oneOf(['bun', 'main', 'sauce']);
export const arrayIngredientsType = PropTypes.arrayOf(PropTypes.shape({
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: groupIngredientsType.isRequired,
  proteins: PropTypes.number,
  fat: PropTypes.number,
  carbohydrates: PropTypes.number,
  calories: PropTypes.number,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  image_mobile: PropTypes.string.isRequired,
  image_large: PropTypes.string.isRequired,
  __v: PropTypes.number.isRequired,
}));
export const cardIngredientType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  proteins: PropTypes.number,
  fat: PropTypes.number,
  carbohydrates: PropTypes.number,
  calories: PropTypes.number,
  image: PropTypes.string.isRequired
});
export const arrayDetailsOrderType = PropTypes.arrayOf(PropTypes.shape({
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired
}));
export const cardType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired
});
export const scrollBarType = PropTypes.oneOf(['ingredients', 'detailsOrder']);
