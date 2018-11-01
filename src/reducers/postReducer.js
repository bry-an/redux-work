import { FETCH_POSTS, NEW_POST } from '../actions/types'


const initialState = {
    items: [],
    item: {}
}

export default function(state=initialState, action) { //evaluates the type we're dealing with
    switch(action.type) {
        default:
            return state
    }

}