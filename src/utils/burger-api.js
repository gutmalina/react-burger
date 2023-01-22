import { BASE_URL } from "./config";

/** проверить ответ*/
const checkResponse = (res)=>{
  if(res.ok){
    return res.json()
  }else{
    Promise.reject(res.status)
  }
};

/** получить массива ингридиентов */
export const getIngredients = ()=> {
  return fetch(`${BASE_URL}/ingredients`, {
    method: 'GET',
    header: {
      'Content-Type': 'application/json'
    }
  })
    .then(res=>checkResponse(res))
};

/** передать заказ и получить номер заказа */
export const getOrder = (isIdIngredients) => {
 return fetch(`${BASE_URL}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "ingredients": isIdIngredients
      })
    })
    .then(res=>checkResponse(res))
};
