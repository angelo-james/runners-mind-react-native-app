import {
  actionTypes
} from './';

export const getUser = () => {
  return async dispatch => {
    try {
      let response = await fetch(`http://127.0.0.1:3800/users`)
      let result = await response.json()
      dispatch({
        type: actionTypes.GET_USER,
        payload: result,
      })
    } catch (err) {
      console.log(err);
    }
  }
}

export const validateUser = credentials => {
  return dispatch => {
    fetch('http://localhost:3800/users/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: { 
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then( async result => {
      let user = await result.json()
          dispatch({
            type: VALIDATE_USER,
            payload: {
              token,
              user
            }
          })
      }
    )
  }
}

export const sendPost = runInfo => {
  return dispatch => {
    fetch('http://127.0.0.1:3800/posts', {
      method: 'POST',
      body: JSON.stringify(runInfo),
      headers: { 
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(async result => {
      let post = await result.json()

      if (user.message) {
        dispatch({
          type: SEND_POST_FAILED,
          payload: post.message
        })
      } else {
        dispatch({
          type: SEND_POST,
          payload: {
            post
          }
        })
      }
    })
  }
}

export const followUser = (followerId, followee) => {
  return dispatch => {
    fetch(`http://127.0.0.1:3800/users/${followerId}/follow`, {
      method: 'PUT',
      body: JSON.stringify(followee),
      headers: { 
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(async result => {
      let data = await result.json()

      if (data.message) {
        dispatch({
          type: FOLLOW_USER_FAILED,
          payload: data.message
        })
      } else {
        dispatch({
          type: FOLLOW_USER,
          payload: {
            data
          }
        })
      }
    })
  }
}

export const unfollowUser = (followerId, followee) => {
  return dispatch => {
    fetch(`http://127.0.0.1:3800/users/${followerId}/unfollow`, {
      method: 'PUT',
      body: JSON.stringify(followee),
      headers: { 
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(async result => {
      let data = await result.json()

      if (data.message) {
        dispatch({
          type: UNFOLLOW_USER_FAILED,
          payload: data.message
        })
      } else {
        dispatch({
          type: UNFOLLOW_USER,
          payload: {
            data
          }
        })
      }
    })
  }
}