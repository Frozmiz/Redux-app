
// Agregamos los tipos de acción
// Constantes que contendrán tanto el nombre como el string correspondiente.

export const GET_POSTS = "GET_POSTS";
export const GET_POSTS_OK = "GET_POST_OK";
export const GET_POSTS_ERROR = "GET_POSTS_ERROR";

// Añadiremos los "action creators", estos devolverán la acción con un "tipo" y un "payload".

export const actionGetPosts = () => ({
    type: GET_POSTS,
})

export const actionGetPostsOk = (posts) => ({
    type: GET_POSTS_OK,
    payload: posts,
})

export const actionGetPostsError = () => ({
    type: GET_POSTS_ERROR,
})

// Esta función llamará a GET_POSTS mediante el action creator para ejecutar la petición a la API.
// Esta API nos devolverá un JSON con posts a modo de test.

function getPosts() {
    return async (dispatch) => {

        // Para llamar a los "action creators" usamos el método "dispatch" para actualizar el estado de Redux.
        dispatch(actionGetPosts());

        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await res.json();

            dispatch(actionGetPostsOk(data));
            
        } catch (error) {
            console.log("Algo ha salido mal");
            dispatch(actionGetPostsError());
        }
    }
}

export default getPosts;