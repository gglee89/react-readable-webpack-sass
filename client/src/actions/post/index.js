import queryApi from '../../api';

export const FETCH_POST = "FETCH_POST";

export const fetchPost = (id = "") => async dispatch => {
    if (!id) {
        throw new Error("missing id for fetchPost");
    }

    const response = await queryApi(id ? 'posts/' + id : 'posts');

    dispatch({ type: FETCH_POST, payload: JSON.parse(response) });
}