import { Scrollbars } from 'react-custom-scrollbars-2';
import styles from './scroll-bar.module.css';
import Ingredients from '../ingredients/ingredients';
import DetailsOrder from '../details-order/details-order';

function ScrollBar({typeScroll}){
  const trackVerticalIngredients = ({style, ...props}) =>
  <div {...props}
    style={{...style,
      width: '8px',
      height: '664px',
      boxSizing: 'border-box',
      backgroundColor: '#2F2F37',
      right: 0,
    }}/>
  const trackVerticalDetailOrder = ({style, ...props}) =>
  <div {...props}
    style={{...style,
      width: '8px',
      height: '464px',
      boxSizing: 'border-box',
      backgroundColor: '#2F2F37',
      right: 0,
    }}/>
  const thumbVerticalIngredients = ({style, ...props}) =>
  <div {...props}
    style={{...style,
      width: '8px',
      minHeight: '492px',
      border: '3px solid #8585AD',
      boxSizing: 'border-box',
      backgroundColor: '#8585AD',
      right: 0,
    }}/>
    const thumbVerticalDetailOrder = ({style, ...props}) =>
    <div {...props}
      style={{...style,
        width: '8px',
        maxHeight: '292px',
        border: '3px solid #8585AD',
        boxSizing: 'border-box',
        backgroundColor: '#8585AD',
        right: 0,
      }}/>
  const typeTrackVertical = (typeScroll === 'ingredients' ? trackVerticalIngredients : trackVerticalDetailOrder);
  const typeThumbVertical = (typeScroll === 'ingredients' ? thumbVerticalIngredients : thumbVerticalDetailOrder);
  const styleScrollBar = (typeScroll === 'ingredients' ? { width: 600, height: 788} : { width: 600, height: 468});

  return(
    <>
      <Scrollbars
        className={styles.scroll_bar}
        style={styleScrollBar}
        renderTrackVertical={typeTrackVertical}
        renderThumbVertical={typeThumbVertical}
        >
        {typeScroll === 'ingredients' ?
          <Ingredients/> :
          <DetailsOrder/>
        }
      </Scrollbars>
    </>
  );
};

export default ScrollBar;
