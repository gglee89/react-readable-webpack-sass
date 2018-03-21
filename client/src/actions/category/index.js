import queryApi from '../../api';

export const FETCH_CATEGORIES = "FETCH_CATEGORIES";

export const fetchCategories = () => async dispatch => {
    let response = await queryApi('categories');

    return dispatch({ type: FETCH_CATEGORIES, payload: JSON.parse(response) });
};