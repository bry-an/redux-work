
import { FETCH_POSTS, NEW_POST } from './types'

//each action creater is function to export

export const fetchPosts = () => dispatch => { //es6 also, dispatch is like a promise resolve
    console.log('fetch!')

        fetch('http://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => dispatch({ //no longer setting state, want to dispatch
                type: FETCH_POSTS,
                payload: posts
            }) )

    }
