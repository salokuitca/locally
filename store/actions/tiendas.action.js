export const SELECT_TIENDA = 'SELECT_TIENDA'

// Tienda seleccionada
export const selectTienda = (id) => ({
    type: SELECT_TIENDA,
    tiendaID: id,
})