const BUTTON_ICON_BURGER='Конструктор';
const BUTTON_ICON_LIST_ORDER='Лента заказов';
const BUTTON_ICON_PROFILE='Личный кабинет';
const TITLE_LEAD = 'Соберите бургер';
const TAG_BAR_BUN='Булки';
const TAG_BAR_MAIN='Начинки';
const TAG_BAR_SAUCE='Соусы';
const FILTER_BUN='bun';
const FILTER_MAIN='sauce';
const FILTER_SAUCE='main';
const SCROLL_BAR_TYPE_INGREDIENTS = 'ingredients';
const SCROLL_BAR_TYPE_DETAILS_ORDER = 'detailsOrder';
const SCROLL_BAR_SIZE_INGREDIENTS = {width: 600, height: 718};
const SCROLL_BAR_SIZE_DETAILS_ORDER = {width: 585, height: 478};
const SCROLL_BAR_INGREDIENTS_TRACK_VERTICAL = ({style, ...props}) =>
  <div {...props}
    style={{...style,
      width: '8px',
      height: '664px',
      boxSizing: 'border-box',
      backgroundColor: '#2F2F37',
      right: 0,
  }}/>;
const SCROLL_BAR_INGREDIENTS_THUMB_VERTICAL = ({style, ...props}) =>
  <div {...props}
    style={{...style,
      width: '8px',
      minHeight: '492px',
      border: '3px solid #8585AD',
      boxSizing: 'border-box',
      backgroundColor: '#8585AD',
      right: 0,
  }}/>;
const SCROLL_BAR_DETAILS_ORDER_TRACK_VERTICAL = ({style, ...props}) =>
  <div {...props}
    style={{...style,
      width: '8px',
      height: '464px',
      boxSizing: 'border-box',
      backgroundColor: '#2F2F37',
      right: 0,
  }}/>;
const SCROLL_BAR_DETAILS_ORDER_THUMB_VERTICAL = ({style, ...props}) =>
  <div {...props}
    style={{...style,
      width: '8px',
      maxHeight: '292px',
      border: '3px solid #8585AD',
      boxSizing: 'border-box',
      backgroundColor: '#8585AD',
      right: 0,
  }}/>;
const TEXT_BUTTON_MAKE_ORDER = 'Оформить заказ';

export {
  BUTTON_ICON_BURGER,
  BUTTON_ICON_LIST_ORDER,
  BUTTON_ICON_PROFILE,
  TITLE_LEAD,
  TAG_BAR_BUN,
  TAG_BAR_MAIN,
  TAG_BAR_SAUCE,
  FILTER_BUN,
  FILTER_MAIN,
  FILTER_SAUCE,
  SCROLL_BAR_TYPE_INGREDIENTS,
  SCROLL_BAR_INGREDIENTS_TRACK_VERTICAL,
  SCROLL_BAR_INGREDIENTS_THUMB_VERTICAL,
  SCROLL_BAR_SIZE_INGREDIENTS,
  SCROLL_BAR_TYPE_DETAILS_ORDER,
  SCROLL_BAR_DETAILS_ORDER_TRACK_VERTICAL,
  SCROLL_BAR_DETAILS_ORDER_THUMB_VERTICAL,
  SCROLL_BAR_SIZE_DETAILS_ORDER,
  TEXT_BUTTON_MAKE_ORDER
};
