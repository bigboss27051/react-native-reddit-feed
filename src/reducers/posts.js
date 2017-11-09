import {
  REQUEST_POSTS, SUCCESS_POSTS, FAIL_POSTS} from '../actions/posts'

export function posts(state={posts:[]},action){
  switch (action.type) {
    case REQUEST_POSTS:
      return {
        ...state,
        didInvalidate:false,
        requesting:true}
    break;
    case SUCCESS_POSTS:
      return {
        ...state,
        posts:action.posts,
        didInvalidate:false,
        requesting:false}
    break;
    case FAIL_POSTS:
      return {
        ...state,
        didInvalidate:true,
        requesting:false}
    break;
  }
  return state
}
