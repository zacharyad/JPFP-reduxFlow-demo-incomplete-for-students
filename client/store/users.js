import axios from 'axios'
// Constant
let GOT_USER = 'GOT_USER'

// Action Creator
let gotUsers = (user) => {
  return {
    type: GOT_USER,
    user
  }
}

// Thunk ASYNC
export let getUsers = () => {
  return async (dispatch) => {
    // dispatch will be used to send the user (action creator user obj) from DB to the reducer.
    try {
      // use axios to get api data
      let data = await axios.get('/api/users') // api url data.date {thing:'things', data: [all: the-users]}

      console.log("From the thunk to get all users: ", data)

      dispatch(gotUsers(data)) // send this nice obj to the reducer

    } catch (error){
      console.log("Error inside the getUser Thunk: ", error)
    }
  }
}

let getUser = (userId) => {
  return (dispatch) => {
    // dispatch will be used to send the user (action creator user obj) from DB to the reducer.
    try {
      // use axios to get api data
      let {data} = axios.get('') // get user by ID route


    } catch (error){
      console.log("Error inside the getUser Thunk: ", error)
    }
  }
}


let reducer = (state = [], action) => {
  switch(action.type){
    // case of each action constant
    case GOT_USER:
      return [...state, action.user] //[{user: Obj, {user: Obj}]
    default:
      return state
  }
}

export default reducer




