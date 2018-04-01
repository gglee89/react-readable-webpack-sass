import { combineReducers } from 'redux'
import categories from './categories'
import post from './post'
import posts from './posts'

export default combineReducers({
    categories,
    post,
    posts,
})