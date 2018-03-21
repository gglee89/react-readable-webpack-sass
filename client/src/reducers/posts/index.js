import { FETCH_POSTS } from '../../actions/posts';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return action.payload;
        default:
            return state;
    }
}