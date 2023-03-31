import { wsReducer as reducer, TWsStore } from "./ws-reducers";
import * as types from "../../constants/index";
import { messageTest } from "../../../utils/test";

const initialState: TWsStore = {
  wsConnected: false,
  message: null,
  error: undefined,
};

describe("check ws reducer", () => {
  it("should return the initial state WS_CONNECTION_START", () => {
    const expected = {
      ...initialState,
    };

    expect(reducer(undefined, {
      type: types.WS_CONNECTION_START
    })).toEqual(expected);
  });

  it("check WS_CONNECTION_SUCCESS", () => {
    const expected = {
      ...initialState,
      error: undefined,
      wsConnected: true
    };

    expect(
      reducer(undefined, {
        type: types.WS_CONNECTION_SUCCESS,
        payload: messageTest
      })
    ).toEqual(expected);
  });

  it("check WS_CONNECTION_ERROR", () => {
    const expected = {
      ...initialState,
      error: "Invalid token",
      wsConnected: false
    };

    expect(
      reducer(undefined, {
        type: types.WS_CONNECTION_ERROR,
        payload: "Invalid token",
      })
    ).toEqual(expected);
  });

  it("check WS_CONNECTION_CLOSED", () => {
    const expected = {
      ...initialState,
      error: undefined,
      wsConnected: false
    };

    expect(
      reducer(undefined, {
        type: types.WS_CONNECTION_CLOSED,
        payload: messageTest
      })
    ).toEqual(expected);
  });

  it("check WS_GET_MESSAGE", () => {
    const expected = {
      ...initialState,
      error: undefined,
      message: messageTest
    };

    expect(
      reducer(undefined, {
        type: types.WS_GET_MESSAGE,
        payload: messageTest
      })
    ).toEqual(expected);
  });
});
