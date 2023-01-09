import styles from './ingredient-details.module.css';

function IngredientDetails(){
  const arr = {
      "_id":"60666c42cc7b410027a1a9b1",
      "name":"Биокотлета из марсианской Магнолии",
      "type":"bun",
      "proteins":80,
      "fat":24,
      "carbohydrates":53,
      "calories":244.4,
      "price":1255,
      "image":"https://code.s3.yandex.net/react/code/meat-01.png",
      "image_mobile":"https://code.s3.yandex.net/react/code/bun-02-mobile.png",
      "image_large":"https://code.s3.yandex.net/react/code/bun-02-large.png",
      "__v":0
   };
  return(
    <>
      <img
        className={`${styles.image} mt-2 mb-5`}
        src={arr.image}
        alt={arr.name}
      />
      <p className={`${styles.subtitle} text text_type_main-medium mb-4`}
        >{arr.name}
      </p>
      <ul className={styles.group}>
        <li className={styles.item}>
          <h4 className='text text_type_main-default text_color_inactive mb-1'>Калории,ккал</h4>
          <p className='text text_type_digits-default text_color_inactive'>{arr.calories}</p>
        </li>
        <li className={styles.item}>
          <h4 className='text text_type_main-default text_color_inactive mb-1'>Белки, г</h4>
          <p className='text text_type_digits-default text_color_inactive'>{arr.proteins}</p>
        </li>
        <li className={styles.item}>
          <h4 className='text text_type_main-default text_color_inactive mb-1'>Жиры, г</h4>
          <p className='text text_type_digits-default text_color_inactive'>{arr.fat}</p>
        </li>
        <li className={styles.item}>
          <h4 className='text text_type_main-default text_color_inactive mb-1'>Углеводы, г</h4>
          <p className='text text_type_digits-default text_color_inactive'>{arr.carbohydrates}</p>
        </li>
      </ul>
    </>
  );
};

export default IngredientDetails;
