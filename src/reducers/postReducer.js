import { FETCH_POSTS, NEW_POST } from '../actions/types'


const initialState = {
    items: [],
    item: {}
}

export default function(state=initialState, action) { //evaluates the type we're dealing with
    switch(action.type) {
        case FETCH_POSTS:
            console.log('reducer!')
            return { 
                ...state, //current state
                items: action.payload
            }
            
        case NEW_POST:
            return { 
                ...state, //return current state
                item: action.payload
            }


        default:
            return state
    }

}