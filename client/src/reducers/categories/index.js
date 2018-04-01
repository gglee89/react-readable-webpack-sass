import { FETCH_CATEGORIES } from '../../actions/categories'

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES:
            return action.payload.categories;
        default:
            return state;
    }
}