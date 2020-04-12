import axios from 'axios';

export const USER_START = 'USER_START';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_FAIL = 'USER_FAIL';
export const ADD_USER = 'ADD_USER';
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
export const ADD_USER_FAIL = 'ADD_USER_FAIL';
export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAIL = 'UPDATE_USER_FAIL';
export const DELETE_USER = 'DELETE_USER';
export const SET_CURRENT = 'SET_CURRENT';
export const CLEAR_CURRENT = 'CLEAR_CURRENT';
export const SET_LOADING = "SET_LOADING";

export const getUser = () => dispatch => {
    dispatch({ type: USER_START });

    // GET users
  return axios.get(`http://localhost:8080/users`)
  .then(res=> {
    console.log(res.data)
    dispatch({ type: USER_SUCCESS, payload: res.data });
  }
    )
    .catch(err => {
      console.log('err', err);

      dispatch({
        type: USER_FAIL,
        payload: err
      });
    }); 
}

// Add Users to db
export const addUsers = (users) => dispatch => {
    dispatch({ type: USER_START });
    axios
      .post(`http://localhost:8080/api/users`, users)
      .then(res => {
        console.log("addUser:", res)
        dispatch({ type: ADD_USER_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: ADD_USER_FAIL, payload: err});
      });
  }

 //Delete  user from server
export const deleteUser= id => dispatch => {
    console.log('delete user', id)
    dispatch({ type: DELETE_USER });
  
    axios
    .delete(`http://localhost:8080/users/${id}`)
    .then(res => {
      console.log("delete user:", res.data)
      dispatch({ type: DELETE_USER, payload: id });
    })
    .catch(err => {
      dispatch({ type: UPDATE_USER_FAIL, payload: err});
    });
  }

 // Set current user
 export const setCurrent = user => {
    return {
      type: SET_CURRENT,
      payload: user
    };
  };

  
      // Clear current user
  export const clearCurrent = () => {
    return {
      type: CLEAR_CURRENT
    };
  };
  
  // Set Loading to true
  export const setLoading = () => {
    return {
      type: SET_LOADING
    };
}

