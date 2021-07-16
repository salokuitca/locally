export const SELECT_TIENDA = 'SELECT_TIENDA'

export const selectTienda = (id) => ({
    type: SELECT_TIENDA,
    tiendaID: id,
})