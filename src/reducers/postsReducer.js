import * as actions from "../actions/postsActions";

// Objeto de estado inicial con el estado de los posts esperando a almacenarlos, uno de errores y otro si están cargados. 

export const initialState = {
    posts: [],
    errors: false,
    loading: false,
};


function postsReducer(state = initialState, action) {
    switch (action.type) {
        case actions.GET_POSTS:
            return {...state, loading: true };
        case actions.GET_POSTS_OK:
            return {...state, posts: action.payload, loading: false, errors: false };
        case actions.GET_POSTS_ERROR:
            return {...state, loading: false, errors: true};
        default:
            return state;
    }
}


export default postsReducer;