import { FETCH_POSTS, NEW_POST } from '../actions/types'


const initialState = {
    items: [],
    item: {}
}

export default function(state=initialState, action) { //evaluates the type we're dealing with
    switch(action.type) {
        case FETCH_POSTS:
            console.log('reducer!')
            return { //want to return current state
                ...state,
                items: action.payload
            }
        default:
            return state
    }

}