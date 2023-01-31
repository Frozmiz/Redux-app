
// Objeto de estado inicial con el estado de los posts esperando a almacenarlos, uno de errores y otro si están cargados. 

export const initialState = {
    posts: [],
    errors: false,
    loading: false,
};


function postsReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}


export default postsReducer;