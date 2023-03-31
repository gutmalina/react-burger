import { editTokenReducer as reducer, TTokenStore } from "./token";
import * as types from "../../constants/index";

const initialState: TTokenStore = {
  isTokenRequest: false,
  isTokenFailed: false,
};

describe("check token reducer", () => {
  it("should return the initial state TOKEN", () => {
    const expected = {
      ...initialState,
      isTokenRequest: true,
      isTokenFailed: false,
    };

    expect(reducer(undefined, {
      type: types.TOKEN,
    })).toEqual(expected);
  });

  it("check TOKEN_SUCCESS", () => {
    const expected = {
      ...initialState,
      isTokenRequest: false,
    };

    expect(
      reducer(undefined, {
        type: types.TOKEN_SUCCESS,
      })
    ).toEqual(expected);
  });

  it("check TOKEN_FAILED", () => {
    const expected = {
      ...initialState,
      isTokenFailed: true,
    };

    expect(
      reducer(undefined, {
        type: types.TOKEN_FAILED,
      })
    ).toEqual(expected);
  });
});
