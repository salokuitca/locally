import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import TiendasReducer from './reducers/tiendas.reducer';
import ProductsReducer from './reducers/products.reducer';
import CartReducer from "./reducers/cart.reducer";
import AuthReducer from "./reducers/auth.reducer";
import FotoReducer from "./reducers/foto.reducer";
import OrderReducer from "./reducers/orders.reducer";


const RootReducer = combineReducers ({
    tiendas: TiendasReducer,
    products: ProductsReducer,
    cart: CartReducer,
    auth: AuthReducer,
    foto: FotoReducer,
    orders: OrderReducer,
})

export default createStore(RootReducer, applyMiddleware(thunk))