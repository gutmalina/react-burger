import { orderReducer as reducer, TOrderStore } from "./order";
import * as types from "../../constants/index";
import { makeOrderTest, getOrderFeedTest } from "../../../utils/test";

const initialState: TOrderStore = {
  order: 0,
  isOrderRequest: false,
  isOrderFailed: false,
  isOrderFeedRequest: false,
  isOrderFeedFailed: false,
  orderFeed: [],
  sum: 0,
  isPreloader: false,
};

describe("check order reducer", () => {
  it("should return the initial state MAKE_ORDER", () => {
    const expected = {
      ...initialState,
      isOrderRequest: true,
      isOrderFailed: false,
      isPreloader: true
    };

    expect(reducer(undefined, {
      type: types.MAKE_ORDER
    })).toEqual(expected);
  });

  it("check MAKE_ORDER_SUCCESS", () => {
    const expected = {
      ...initialState,
      order: 46333,
      isOrderRequest: false,
      isPreloader: false
    };

    expect(
      reducer(undefined, {
        type: types.MAKE_ORDER_SUCCESS,
        order: makeOrderTest,
      })
    ).toEqual(expected);
  });

  it("check MAKE_ORDER_FAILED", () => {
    const expected = {
      ...initialState,
      isOrderRequest: false,
      isOrderFailed: true,
      isPreloader: false
    };

    expect(
      reducer(undefined, {
        type: types.MAKE_ORDER_FAILED,
      })
    ).toEqual(expected);
  });

  it("check GET_ORDER_FEED", () => {
    const expected = {
      ...initialState,
      isOrderFeedRequest: true,
      isOrderFeedFailed: false
    };

    expect(
      reducer(undefined, {
        type: types.GET_ORDER_FEED
      })
    ).toEqual(expected);
  });

  it("check GET_ORDER_FEED_SUCCESS", () => {
    const expected = {
      ...initialState,
      orderFeed: [getOrderFeedTest],
      isOrderFeedRequest: false
    };

    expect(
      reducer(undefined, {
        type: types.GET_ORDER_FEED_SUCCESS,
        orderFeed: [getOrderFeedTest],
      })
    ).toEqual(expected);
  });

  it("check GET_ORDER_FEED_FAILED", () => {
    const expected = {
      ...initialState,
      isOrderFeedRequest: false,
      isOrderFeedFailed: true
    };

    expect(
      reducer(undefined, {
        type: types.GET_ORDER_FEED_FAILED,
      })
    ).toEqual(expected);
  });

  it("check CLOSE_ORDER", () => {
    const expected = {
      ...initialState,
      order: 0,
      orderFeed: [],
      isOrderFailed: false,
      isOrderRequest: false
    };

    expect(
      reducer(undefined, {
        type: types.CLOSE_ORDER,
      })
    ).toEqual(expected);
  });

  it("check SUM_ORDER", () => {
    const expected = {
      ...initialState,
      sum: 444
    };

    expect(
      reducer(undefined, {
        type: types.SUM_ORDER,
        sum: 444
      })
    ).toEqual(expected);
  });
});
