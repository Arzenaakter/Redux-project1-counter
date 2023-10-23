import { applyMiddleware, createStore } from "redux";
import rootReducer from "./RootReducer";
import myLogger from "./middlewares/myLogger";
import logger from "redux-logger";




export const store = createStore(rootReducer,applyMiddleware(logger ,myLogger));