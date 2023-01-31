export const GET_COMMENTS = "GET_COMMENTS";
export const GET_COMMENTS_OK = "GET_COMMENTS_OK";
export const GET_COMMENTS_ERROR = "GET_COMMENTS_ERROR";

export const actionGetComments = () => ({
    type: GET_COMMENTS,
});

export const actionGetCommentsOk = (Comments) => ({
    type: GET_COMMENTS_OK,
    payload: Comments,
});

export const actionGetCommetsError = () => ({
    type: GET_COMMENTS_ERROR,
});

function getComments(postId) {

        return async (dispatch) => {

            dispatch(actionGetComments());

        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
            const data = await res.json();

            dispatch(actionGetCommentsOk(data));
        } catch (error) {
            console.log("Error al cargar los comentarios.");
            dispatch(actionGetCommetsError());
        }
    }
    
}

export default getComments;