import * as actions from "../actions/postActions";

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
        case actions.GET_POST:
            return {...state, loading: true};
        case actions.GET_POST_OK:
            return {...state, post: action.payload, loading: false, errors: false};
        case actions.GET_POST_ERROR:
            return {...state, loading: false, errors: true};
        default:
            return state;
    }
}

export default postReducer;