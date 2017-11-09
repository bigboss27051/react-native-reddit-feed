import axios from 'axios'
export const REQUEST_COMMENTS = 'REQUEST_COMMENTS'
export const SUCCESS_COMMENTS = 'SUCCESS_COMMENTS'
export const FAIL_COMMENTS = 'FAIL_COMMENTS'

export const requestComments = subComments => ({
  type: REQUEST_COMMENTS,
  subComments
})

export const failComments = subComments => ({
  type: FAIL_COMMENTS,
  subComments
})

export const successComments = (subComments, data) => ({
  type: SUCCESS_COMMENTS,
  subComments,
  comments: data.data.children.map(child => child.data)
})


export const getComments = subComments => dispatch => {
  dispatch(requestComments(subComments))
  return axios.get(`https://www.reddit.com${subComments}.json`)
          .then((response) => {
           dispatch(successComments(subComments, response.data[1]))
         })
         .catch((err) => {
          dispatch(failComments(subComments))
         })
}