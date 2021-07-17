import {PRODUCTS} from '../../data/products';
import { SELECT_PRODUCT, FILTER_PRODUCT } from '../actions/products.action';

// Estado inicial
const INITIAL_STATE = {
    listProducts : PRODUCTS,
    filteredProducts: [],
    selected: null,
}

const ProductsReducer = (state= INITIAL_STATE, action) => {
    switch (action.type) {
        // Selección de producto
        case SELECT_PRODUCT:
            return {
                ...state,
                selected: state.listProducts.find(product=> product.id === action.productID),
            }
        // Filtrar los productos según tienda
        case FILTER_PRODUCT:
            return {
                ...state,
                filteredProducts: state.listProducts.filter(product => product.tiendaID === action.tiendaID)
            }
        default: 
            return {...state};
    }
}

export default ProductsReducer;