import { userReducer as reducer, TUserStore } from "./user";
import * as types from "../../constants/index";
import { userLoginTest, getUserTest } from "../../../utils/test";

const initialState: TUserStore = {
  name: "",
  email: "",
  isLoggedIn: false,
  isForgot: false,
  isReset: false,
  isGetUser: false,

  isRegisterRequest: false,
  isRegisterFailed: false,

  isLoginRequest: false,
  isLoginFailed: false,

  isGetRequest: false,
  isGetSuccess: false,
  isGetFailed: false,

  isEditRequest: false,
  isEditFailed: false,

  isForgotRequest: false,
  isForgotFailed: false,

  isResetRequest: false,
  isResetFailed: false,
};

describe("check user reducer", () => {
  it("should return the initial state REGISTER", () => {
    const expected = {
      ...initialState,
      isRegisterRequest: true,
      isRegisterFailed: false,
    };

    expect(reducer(undefined, {
      type: types.REGISTER
    })).toEqual(expected);
  });

  it("check REGISTER_SUCCESS", () => {
    const expected = {
      ...initialState,
      isRegisterRequest: false,
      isLoggedIn: true,
      isGetSuccess: true,
    };

    expect(
      reducer(undefined, {
        type: types.REGISTER_SUCCESS,
      })
    ).toEqual(expected);
  });

  it("check REGISTER_FAILED", () => {
    const expected = {
      ...initialState,
      isLoggedIn: false,
      isRegisterFailed: true,
    };

    expect(
      reducer(undefined, {
        type: types.REGISTER_FAILED,
      })
    ).toEqual(expected);
  });

  it("check LOGIN", () => {
    const expected = {
      ...initialState,
      isLoginRequest: true,
      isLoggedIn: false,
      isLoginFailed: false,
    };

    expect(
      reducer(undefined, {
        type: types.LOGIN
      })
    ).toEqual(expected);
  });

  it("check LOGIN_SUCCESS", () => {
    const expected = {
      ...initialState,
      isForgot: false,
      isReset: false,
      isLoginRequest: false,
      isLoggedIn: true,
    };

    expect(
      reducer(undefined, {
        type: types.LOGIN_SUCCESS,
        user: userLoginTest
      })
    ).toEqual(expected);
  });

  it("check LOGIN_FAILED", () => {
    const expected = {
      ...initialState,
      isLoggedIn: false,
      isLoginFailed: true,
    };

    expect(
      reducer(undefined, {
        type: types.LOGIN_FAILED,
      })
    ).toEqual(expected);
  });

  it("check GET_USER", () => {
    const expected = {
      ...initialState,
      isGetRequest: true,
      isGetFailed: false,
      isGetSuccess: false,
    };

    expect(
      reducer(undefined, {
        type: types.GET_USER,
      })
    ).toEqual(expected);
  });

  it("check GET_USER_SUCCESS", () => {
    const expected = {
      ...initialState,
      name: "test",
      email: "test@test.ru",
      isGetUser: true,
      isLoggedIn: true,
      isGetSuccess: true,
      isGetRequest: false,
    };

    expect(
      reducer(undefined, {
        type: types.GET_USER_SUCCESS,
        user: getUserTest
      })
    ).toEqual(expected);
  });

  it("check GET_USER_FAILED", () => {
    const expected = {
      ...initialState,
      isGetUser: false,
      isGetRequest: false,
      isGetFailed: true,
    };

    expect(
      reducer(undefined, {
        type: types.GET_USER_FAILED,
      })
    ).toEqual(expected);
  });

  it("check EDIT", () => {
    const expected = {
      ...initialState,
      isEditRequest: true,
      isEditFailed: false,
    };

    expect(
      reducer(undefined, {
        type: types.EDIT,
      })
    ).toEqual(expected);
  });

  it("check EDIT_SUCCESS", () => {
    const expected = {
      ...initialState,
      name: "test",
      email: "test@test.ru",
      isEditRequest: false,
    };

    expect(
      reducer(undefined, {
        type: types.EDIT_SUCCESS,
        user: getUserTest
      })
    ).toEqual(expected);
  });

  it("check EDIT_FAILED", () => {
    const expected = {
      ...initialState,
      isEditRequest: false,
      isEditFailed: true,
    };

    expect(
      reducer(undefined, {
        type: types.EDIT_FAILED
      })
    ).toEqual(expected);
  });

  it("check FORGOT", () => {
    const expected = {
      ...initialState,
      isForgotRequest: true,
      isForgotFailed: false,
    };

    expect(
      reducer(undefined, {
        type: types.FORGOT
      })
    ).toEqual(expected);
  });

  it("check FORGOT_SUCCESS", () => {
    const expected = {
      ...initialState,
      isForgot: true,
      isForgotRequest: false,
    };

    expect(
      reducer(undefined, {
        type: types.FORGOT_SUCCESS
      })
    ).toEqual(expected);
  });

  it("check FORGOT_FAILED", () => {
    const expected = {
      ...initialState,
      isForgotRequest: false,
      isForgotFailed: true,
    };

    expect(
      reducer(undefined, {
        type: types.FORGOT_FAILED
      })
    ).toEqual(expected);
  });

  it("check RESET", () => {
    const expected = {
      ...initialState,
      isResetRequest: true,
      isResetFailed: false,
    };

    expect(
      reducer(undefined, {
        type: types.RESET
      })
    ).toEqual(expected);
  });

  it("check RESET_SUCCESS", () => {
    const expected = {
      ...initialState,
      isReset: true,
      isResetRequest: false,
    };

    expect(
      reducer(undefined, {
        type: types.RESET_SUCCESS
      })
    ).toEqual(expected);
  });

  it("check RESET_FAILED", () => {
    const expected = {
      ...initialState,
      isResetRequest: false,
      isResetFailed: true,
    };

    expect(
      reducer(undefined, {
        type: types.RESET_FAILED
      })
    ).toEqual(expected);
  });
});
