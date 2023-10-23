import { applyMiddleware, createStore } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from "./RootReducer";
import myLogger from "./middlewares/myLogger";
import logger from "redux-logger";




export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger ,myLogger)));