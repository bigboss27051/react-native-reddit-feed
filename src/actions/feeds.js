import axios from 'axios'
export const REQUEST_FEED = 'REQUEST_FEED'
export const SUCCESS_FEED = 'SUCCESS_FEED'
export const FAIL_FEED = 'FAIL_FEED'


export const requestFeed = reddit => ({
  type: REQUEST_FEED,
  reddit
})

export const failFeed = reddit => ({
  type: FAIL_FEED,
  reddit
})

export const successFeed = (reddit, data) => ({
  type: SUCCESS_FEED,
  reddit,
  feeds: data.data.children.map(child => child.data)
})


export const getFeeds = reddit => dispatch => {
  dispatch(requestFeed(reddit))
  return axios.get(`https://www.reddit.com/r/${reddit}.json`)
          .then((response) => {
           dispatch(successFeed(reddit, response.data))
         })
         .catch((err) => {
          dispatch(failFeed(reddit))
         })
}

