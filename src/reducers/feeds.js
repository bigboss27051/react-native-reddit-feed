import {
  REQUEST_FEED, SUCCESS_FEED, FAIL_FEED} from '../actions/feeds'

export function feeds(state={feeds:[]},action){
  switch (action.type) {
    case REQUEST_FEED:
    return {
      ...state,
      requesting:true,
      didInvalidate: false
    }
    break;
    case SUCCESS_FEED:
    return {...state,
      feeds:action.feeds,
      requesting:false,
      didInvalidate: false
    }
    break;
    case FAIL_FEED:
    return {
      ...state,
      requesting:true,
      didInvalidate: true
    }
    break;
  }
  return state
}
