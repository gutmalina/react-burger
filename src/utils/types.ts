export type TIngredient = {
  _id: string;
  name: string;
  type: TTypeIngredientEn;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
  keyid?: string;
  count?: any;
};

export type TArrayIngredients = {
  arrayIngredients: TIngredient[]
};

export type TPropsIngredient = {
  ingredient: TIngredient
};
export type TTypeIngredientEn = "bun" | "main" | "sauce";

export type TRenderIngredient = {
  groupIngredients: TIngredient[],
  typeGroup: string
}

export type TRenderBurgerInside = {
  card: TIngredient;
  index: number;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
}

export type TTypeScroll = {
  typeScroll: string
}

export type TModal = {
  onClose?: ()=>void,
  textTitle?: string
}

export type TCloseModal = Omit<TModal, 'textTitle'>

export type TLink = {
  onTo: string,
  textSpan?: string
}

export type TPage = {
  textButton?: string,
  linkCancel?: string,
  textTitle?: string
}

export type TUser = {
  name: string,
  email: string,
  password: string,
}

export type TLoginUser = Omit<TUser, 'name'>
export type TEmailUser = Omit<TUser, 'name' | 'password'>
export type TGetUser = Omit<TUser, 'password'>

export type TNewPassword = {
  password: string,
  code: string
}

export type TOrdersPage = {
  typeOrder: string
  onOrder: TWsOrders
}

export type TElement = {
  typeElement: string
  typeSelect: string
}

export type TWsOrders = {
  createdAt: string,
  ingredients: string[],
  name: string,
  number: string,
  status: string,
  updatedAt: string,
  _id: string,
}

export type TWsMessage = {
  success: boolean;
  total: number;
  totalToday: number;
  orders: TWsOrders[];
};

export type TNumberOrder = {
  groupOrders?: TWsOrders[]
}

export type TElementOrder = {
  id: string
}

export type TResponseSuccess = {
  success: boolean
}
export type TResponseIngredients = TResponseSuccess & {
  data: TIngredient[]
}

export type TResponseMessage = TResponseSuccess & {
  message: string
}

export type TResponseMakeOrder = TResponseSuccess & {
  name: string,
  order: {
    ingredients: TIngredient[],
    _id: string,
    owner: {
      name: string,
      email: string,
      createdAt: string,
      updatedAt: string
    },
    status: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    number: number,
    price: number
  }
}

export type TResponseToken = TResponseSuccess & {
  accessToken: string,
  refreshToken: string,
}

export type TResponseUser = TResponseSuccess & {
  user: {
    name: string,
    email: string
  }
}

export type TResponseLogin = TResponseToken & TResponseSuccess & {
  user: {
    name: string,
    email: string,
    password: string
  }
}

export type TResponseRegister = TResponseToken & TGetUser
