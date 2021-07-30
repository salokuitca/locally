export const SELECT_TIENDA = 'SELECT_TIENDA';
export const LIKE_TIENDA = 'LIKE_TIENDA';

// Tienda seleccionada
export const selectTienda = (id) => ({
    type: SELECT_TIENDA,
    tiendaID: id,
});

//Seleccionar para Favoritos
export const likeTienda = (id) => ({
    type: LIKE_TIENDA,
    tiendaID: id,
});