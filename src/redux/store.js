import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger];

const Store = createStore(rootReducer, applyMiddleware(...middlewares));

export default Store;
