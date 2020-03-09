import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [];
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}
/*to make middlewares not appeare on console log at
 production, just appeare on development
 */
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
