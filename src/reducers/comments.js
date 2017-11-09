import {
  REQUEST_COMMENTS, SUCCESS_COMMENTS, FAIL_COMMENTS} from '../actions/comments'

export function comments(state={comments:[]},action){
  switch (action.type) {
    case REQUEST_COMMENTS:
    return {
      ...state,
      requesting:true,
      didInvalidate: false
    }
    break;
    case SUCCESS_COMMENTS:
    return {...state,
      comments:action.comments,
      requesting:false,
      didInvalidate: false
    }
    break;
    case FAIL_COMMENTS:
    return {
      ...state,
      requesting:true,
      didInvalidate: true
    }
    break;
  }
  return state
}