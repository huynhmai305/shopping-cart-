import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import rootReducer from "../reducers";
import rootSaga from "../sagas";
import { createWrapper } from "next-redux-wrapper";

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export const makeStore = (initialState) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    combineReducers(rootReducer),
    initialState,
    bindMiddleware([sagaMiddleware])
  );

  // @ts-ignore
  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper(makeStore, { debug: true });
