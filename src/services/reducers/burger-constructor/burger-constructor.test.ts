import { burgerConstructorReducer as reducer, TBurgerConstructorStore } from "./burger-constructor";
import * as types from "../../constants/index";
import { ingredientTest } from "../../../utils/test";

const initialState: TBurgerConstructorStore = {
  burger: {
    bun: [],
    filling: [],
  },
};

describe("check burger-constructor reducer", () => {
  it("should return the initial state ADD_BUN", () => {
    const expected = {
      ...initialState,
      burger: {
        ...initialState.burger,
        bun: [ingredientTest],
      },
    };

    expect(reducer(undefined, {
      type: types.ADD_BUN,
      bun: ingredientTest
    })).toEqual(expected);
  });

  it("check ADD_FILLING", () => {
    const expected = {
      ...initialState,
      burger: {
        ...initialState.burger,
        filling: [...initialState.burger.filling, ingredientTest],
      },
    };

    expect(
      reducer(undefined, {
        type: types.ADD_FILLING,
        filling: ingredientTest,
        keyid: '123456',
      })
    ).toEqual(expected);
  });

  it("check REMOVE_FILLING", () => {
    const expected = {
      ...initialState,
      burger: {
        ...initialState.burger,
        filling: [
          ...initialState.burger.filling.filter(
            (item) => item.keyid !== '123456'
          ),
        ],
      },
    };

    expect(
      reducer(undefined, {
        type: types.REMOVE_FILLING,
        keyid: '123456',
      })
    ).toEqual(expected);
  });

  it("check UPDATE_FILLING", () => {
    const expected = {
      ...initialState,
      burger: {
        ...initialState.burger,
        filling: [ingredientTest],
      },
    };

    expect(
      reducer(undefined, {
        type: types.UPDATE_FILLING,
        filling: [ingredientTest]
      })
    ).toEqual(expected);
  });

  it("check BURGER_REMOVE", () => {
    const expected = {
      ...initialState,
      burger: {
        bun: [],
        filling: [],
      },
    };

    expect(
      reducer(undefined, {
        type: types.BURGER_REMOVE
      })
    ).toEqual(expected);
  });
});
