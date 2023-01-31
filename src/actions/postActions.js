export const GET_POST = "GET_POST";
export const GET_POST_OK = "GET_POST_OK";
export const GET_POST_ERROR = "GET_POST_ERROR";

export const actionGetPost = () => ({
    type: GET_POST,
});

export const actionGetPostOk = (post) => ({
    type: GET_POST_OK,
    payload: post,
}); 

export const actionGetPostError = () => ({
    type: GET_POST_ERROR,
});

// Con esta acción vamos a obtener un post individual de la API, almacenándolo en el estado que hemos generado.

function getPost(postId) {
    return async (dispatch) => {

        dispatch(actionGetPost());

        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
            const data = await res.json();

            dispatch(actionGetPostOk(data));
        } catch (error) {
            console.log("El post no se ha cargado correctamente.")
            dispatch(actionGetPostError());
        }
    }
}

export default getPost;