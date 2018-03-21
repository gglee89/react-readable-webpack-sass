import queryApi from '../../api';

export const FETCH_CATEGORIES = "FETCH_CATEGORIES";

export const fetchCategories = () => async dispatch => {
    const response = await queryApi('categories');

    dispatch({ type: FETCH_CATEGORIES, payload: response });
};