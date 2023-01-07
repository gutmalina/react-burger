import PropTypes from 'prop-types';

export const textType = PropTypes.string;
export const childrenType = PropTypes.element;
export const arrayIngredientsType = PropTypes.arrayOf(PropTypes.shape({
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
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
export const groupIngredientsType = PropTypes.oneOf(['bun', 'main', 'sauce']).isRequired;
export const scrollBarType = PropTypes.oneOf(['ingredients', 'detailsOrder']);
