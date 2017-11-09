import { combineReducers } from 'redux'
import { posts } from './posts'
import { feeds } from './feeds'
import { comments } from './comments'


export default combineReducers({
  posts:posts,
  feeds:feeds,
  comments:comments
});