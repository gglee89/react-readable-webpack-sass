import {
    FETCH_POST,
    UPDATE_POST
} from '../../actions/post';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_POST:
            return action.payload;
        case UPDATE_POST:
            return {
                ...state,
                voteScore: action.payload.voteScore
            }
        default:
            return state;
    }
}