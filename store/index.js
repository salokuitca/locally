import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import TiendasReducer from './reducers/tiendas.reducer';
import ProductsReducer from './reducers/products.reducer';
import CartReducer from "./reducers/cart.reducer";
import AuthReducer from "./reducers/auth.reducer";

const RootReducer = combineReducers ({
    tiendas: TiendasReducer,
    products: ProductsReducer,
    cart: CartReducer,
    auth: AuthReducer,
})

export default createStore(RootReducer, applyMiddleware(thunk))