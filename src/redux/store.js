import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

import rootReducer from "./root-reducer";

const middlewares = [];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const Store = createStore(rootReducer, applyMiddleware(...middlewares));

const Persistor = persistStore(Store);

const store = { Store, Persistor };

export default store;
