import { createStore, combineReducers } from "redux";

import TiendasReducer from './reducers/tiendas.reducer';
import ProductsReducer from './reducers/products.reducer';

const RootReducer = combineReducers ({
    tiendas: TiendasReducer,
    products: ProductsReducer,
    
})

export default createStore(RootReducer)