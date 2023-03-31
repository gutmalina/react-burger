import {
  burgerIngredientsReducer as reducer,
  TBurgerIngredientsStore,
} from "./burger-ingredients";
import * as types from "../../constants/index";
import { ingredientTest } from "../../../utils/test";

const initialState: TBurgerIngredientsStore = {
  ingredients: [],
  isIngredientsRequest: false,
  isIngredientsFailed: false,
  activeTab: "bun",
};

describe("check burger-ingredient reducer", () => {
  it("should return the initial state GET_INGREDIENTS", () => {
    const expected = {
      ...initialState,
      isIngredientsRequest: true,
      isIngredientsFailed: false,
    };

    expect(reducer(undefined, {
      type: types.GET_INGREDIENTS,
    })).toEqual(expected);
  });

  it("check GET_INGREDIENTS_SUCCESS", () => {
    const expected = {
      ...initialState,
      ingredients: [ingredientTest],
      isIngredientsRequest: false,
    };

    expect(
      reducer(undefined, {
        type: types.GET_INGREDIENTS_SUCCESS,
        ingredients: [ingredientTest],
      })
    ).toEqual(expected);
  });

  it("check GET_INGREDIENTS_FAILED", () => {
    const expected = {
      ...initialState,
      isIngredientsRequest: false,
      isIngredientsFailed: true,
    };

    expect(
      reducer(undefined, {
        type: types.GET_INGREDIENTS_FAILED,
      })
    ).toEqual(expected);
  });

  it("check ACTIVE_TAB_BAR", () => {
    const expected = {
      ...initialState,
      activeTab: "bun",
    };

    expect(
      reducer(undefined, {
        type: types.ACTIVE_TAB_BAR,
        activeTab: "bun",
      })
    ).toEqual(expected);
  });
});
