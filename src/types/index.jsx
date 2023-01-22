import PropTypes from 'prop-types';

export const textType = PropTypes.string;
export const childrenType = PropTypes.element;
export const boolType = PropTypes.bool;
export const functionType = PropTypes.func;
export const groupIngredientsType = PropTypes.oneOf(['bun', 'main', 'sauce']);
export const ingredientsType = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: groupIngredientsType.isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  image_mobile: PropTypes.string.isRequired,
  image_large: PropTypes.string.isRequired,
  __v: PropTypes.number.isRequired,
});
export const arrayIngredientsType = PropTypes.arrayOf(ingredientsType);
export const scrollBarType = PropTypes.oneOf(['ingredients', 'detailsOrder']);
export const orderType = PropTypes.objectOf({
  name: PropTypes.string.isRequired,
  order: PropTypes.objectOf({
    number: PropTypes.number.isRequired
  }).isRequired,
  success: PropTypes.bool.isRequired
})
