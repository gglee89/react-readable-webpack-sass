import queryApi from '../../api';

export const FETCH_POSTS = "FETCH_POSTS";

export const fetchPosts = (category = "") => async dispatch => {
    const response = await queryApi(category ? category + '/posts' : 'posts');

    dispatch({ type: FETCH_POSTS, payload: JSON.parse(response) });
}