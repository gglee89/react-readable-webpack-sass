import { combineReducers } from 'redux'
import category from './category'
import post from './post'
import posts from './posts'

export default combineReducers({
    category,
    post,
    posts,
})