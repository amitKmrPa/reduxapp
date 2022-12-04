import { createStore,applyMiddleware,compose } from "redux";
import { GetProducts } from "../reducers/GetProducts";
import thunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
    GetProducts,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;