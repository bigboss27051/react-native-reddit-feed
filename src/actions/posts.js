import axios from 'axios'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const SUCCESS_POSTS = 'SUCCESS_POSTS'
export const FAIL_POSTS = 'FAIL_POSTS'

export const requestPosts = name => ({
  type: REQUEST_POSTS,
  name
})

export const successPosts = (name, data) => ({
  type: SUCCESS_POSTS,
  name,
  posts: data.data.children.map(child => child.data)
})


export const getPosts = name => dispatch => {
  dispatch(requestPosts(name))
  return axios.get(`https://www.reddit.com/by_id/${name}.json`)
          .then((response) => {
           dispatch(successPosts(name, response.data))
         })
}