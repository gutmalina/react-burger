import { useEffect, useState } from 'react';
import { BASE_URL } from "../../utils/config";
import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
import { TITLE_LEAD } from '../../utils/constants';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import Modal from '../modal/modal';

function App() {
  const [isIngredients, setIsIngredients] = useState([]);

  useEffect(()=>{
    fetch(BASE_URL, {
      method: 'GET',
      header: {
        'Content-Type': 'application/json'
      }
    })
      .then((res)=>{
        if(res.ok){
          return res.json()
        }else{
          Promise.reject(res.status)
        }
      })
      .then((data)=>{
        setIsIngredients(data.data)
      })
      .catch((err)=>(console.log(err)))
  }, []);

  return (
    <div className={styles.body}>
      <div className={styles.page}>
        <Modal/>
        {/* <AppHeader/>
        <section className={styles.main}>
          <h1 className="text text_type_main-large mt-10 mb-5">
            {TITLE_LEAD}
          </h1>
          <div className={styles.make_burger}>
            <BurgerIngredients
              arrIngredients={isIngredients}
            />
            <BurgerConstructor
              arrDetailsOrder={isIngredients}
            />
          </div>
        </section> */}

      </div>
    </div>
  );
};

export default App;
