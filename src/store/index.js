import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { globalReducer } from "./reducers";
import { rootSaga, sagaMiddleware } from "./sagas";

export const store = createStore(
  globalReducer(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
