

// Contendrá el estado post con el post que seleccionemos de la lista completa
// inicialmente contenga un objeto vacío.

export const initialState = {
    post: {},
    errors: false,
    loading: true,
};

// postReducer contemplará el estado de los errores y la carga.

function postReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default postReducer;