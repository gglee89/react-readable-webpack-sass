import { FETCH_CATEGORIES } from '../../actions/category'

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES:
            return {
                ...state,
                category: action.payload
            };
        default:
            return state;
    }
}