import queryApi from '../../api'

export const ADD_POSTS = "ADD_POSTS"
export const FETCH_POSTS = "FETCH_POSTS"

export const fetchPosts = (category = "") => async dispatch => {
    const response = await queryApi(category ? category + '/posts' : 'posts')

    dispatch({ type: FETCH_POSTS, payload: JSON.parse(response) })
}

export const addPosts = (body) => async dispatch => {
    const response = await queryApi('posts', {
        method: 'POST',
        body: JSON.stringify(body)
    })

    return dispatch({ type: ADD_POSTS, payload: JSON.parse(response) })
}