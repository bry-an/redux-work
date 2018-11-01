//root reducer

import { combineReducers } from 'redux'
import postReducer from './postReducer'

export default combineReducers({
    posts: postReducer //this means that state.posts will have data from reducers
})



