import { TIngredient, TWsMessage, TResponseMakeOrder, TWsOrders, TLoginUser, TGetUser } from "./types";

export const ingredientTest: TIngredient = {
  _id: "60d3b41abdacab0026a733c9",
  name: "Мясо бессмертных моллюсков Protostomia",
  type: "main",
  proteins: 433,
  fat: 244,
  carbohydrates: 33,
  calories: 420,
  price: 1337,
  image: "https://code.s3.yandex.net/react/code/meat-02.png",
  image_mobile: "https://code.s3.yandex.net/react/code/meat-02-mobile.png",
  image_large: "https://code.s3.yandex.net/react/code/meat-02-large.png",
  __v: 0
};

export const messageTest: TWsMessage = {
  success: true,
  total: 46214,
  totalToday: 257,
  orders:  [
    {
      createdAt: "2023-03-27T14:22:26.852Z",
      ingredients: [ingredientTest],
      name: "Space spicy флюоресцентный традиционный-галактический бургер",
      number: 46305,
      status: "done",
      updatedAt: "2023-03-27T14:22:27.462Z",
      _id: "6421a6a20905fd001b623c45",
    }
  ]
}

export const makeOrderTest: TResponseMakeOrder = {
  success: true,
  name: "Минеральный традиционный-галактический краторный бургер",
  order: {
    ingredients: [ingredientTest],
    _id: "6421be940905fd001b623cf7",
    owner: {
      name: "test",
      email: "test@test.ru",
      createdAt: "2023-02-01T14:55:59.868Z",
      updatedAt: "2023-03-21T16:03:02.993Z"
    },
    status: "done",
    name: "Минеральный традиционный-галактический краторный бургер",
    createdAt: "2023-03-27T16:04:36.412Z",
    updatedAt: "2023-03-27T16:04:36.848Z",
    number: 46333,
    price: 2825
  }
}

export const getOrderFeedTest: TWsOrders = {
  _id:"6419ac43936b17001be716b5",
  ingredients:
    [
      "60d3b41abdacab0026a733d4",   "60d3b41abdacab0026a733ce"
    ],
  status:"done",
  name:"Краторный астероидный альфа-сахаридный  метеоритный традиционный-галактический бургер",
  createdAt:"2023-03-21T13:08:19.911Z", updatedAt:"2023-03-21T13:08:20.379Z",
  number:45124
}

export const userLoginTest: TLoginUser = {
  email: "test@test.ru",
  password: "test",
}

export const getUserTest: TGetUser = {
  name: "test",
  email: "test@test.ru"
}
