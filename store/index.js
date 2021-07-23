import { createStore, combineReducers } from "redux";

import TiendasReducer from './reducers/tiendas.reducer';
import ProductsReducer from './reducers/products.reducer';
import CartReducer from "./reducers/cart.reducer";

const RootReducer = combineReducers ({
    tiendas: TiendasReducer,
    products: ProductsReducer,
    cart: CartReducer,
})

export default createStore(RootReducer)