export const SELECT_PRODUCT = 'SELECT_PRODUCT';
export const FILTER_PRODUCT = 'FILTER_PRODUCT';

// Producto seleccionado
export const selectProduct = (id) => ({
    type: SELECT_PRODUCT,
    productID: id,
})

// Filtro producto
export const filterProduct = (id) => ({
    type: FILTER_PRODUCT,
    tiendaID: id,
})