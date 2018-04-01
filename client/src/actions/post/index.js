import queryApi from '../../api';

export const FETCH_POST = "FETCH_POST";
export const UPDATE_POST = "UPDATE_POST";

export const fetchPost = (id = "") => async dispatch => {
    if (!id) {
        throw new Error("missing id for fetchPost");
    }

    const response = await queryApi(id ? 'posts/' + id : 'posts');

    dispatch({ type: FETCH_POST, payload: JSON.parse(response) });
}

export const updatePost = (id, body) => async dispatch => {
    if (!id) {
        throw new Error("missing id for updatePost")
    }

    const response = await queryApi('posts/' + id, {
        method: 'POST',
        body: JSON.stringify(body)
    })

    return dispatch({ type: UPDATE_POST, payload: JSON.parse(response) })
}