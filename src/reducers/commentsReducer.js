

// Contendrá la lista de comentarios en un array vacío y el estado de carga y errores.

export const initialState = {
    comments: [],
    loading: false,
    errors: false,
};

function commentsReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default commentsReducer;