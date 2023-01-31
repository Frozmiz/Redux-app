import * as actions from "../actions/commentsActions";

// Contendrá la lista de comentarios en un array vacío y el estado de carga y errores.

export const initialState = {
    comments: [],
    loading: false,
    errors: false,
};

function commentsReducer(state = initialState, action) {
    switch (action.type) {
        case actions.GET_COMMENTS:
            return {...state, loading:true };
        case actions.GET_COMMENTS_OK:
            return {...state, comments: action.payload, loading: false, errors: false};
        case actions.GET_COMMENTS_ERROR:
            return {...state, loading:false, errors:true};
        default:
            return state;
    }
}

export default commentsReducer;