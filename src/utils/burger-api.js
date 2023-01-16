import { BASE_URL } from "./config";

export const getIngredients = ()=> {
  return fetch(BASE_URL, {
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
    .catch((err)=>(console.log(err)))
};
