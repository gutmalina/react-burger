export interface IRouter {
  redirectTo: string,
  element: JSX.Element
}

export interface IRouterOnlyunAuth extends IRouter {
  onlyUnAuth: boolean
}


