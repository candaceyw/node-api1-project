import { 
USER_SUCCESS ,
  USER_FAIL,
  ADD_USER,
  ADD_USER_SUCCESS,
  ADD_USER_FAIL,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  DELETE_USER,
  SET_CURRENT,
  CLEAR_CURRENT,
  SET_LOADING,
  USER_START,} from '../actions/userActions'

const initialState = {
    users: [],
    loading: false,
    error: null
  };

  
  export default (state = initialState, action) => {
    switch (action.type) {

        case USER_START:
    return {
      ...state,
      loading: true,
      error: null
    }
  case USER_SUCCESS:
    return {
      ...state,
      users: action.payload,
      loading: false,
      error: null
    }
  case USER_FAIL:
    return {
      ...state,
      users: [],
      loading: false,
      error: action.payload
    };

    case ADD_USER:
        return {
          ...state,
          loading: true,
          error: ""
        };
      case ADD_USER_SUCCESS:
        return {
          ...state,
          loading: false,
          users: [...action.payload]
        };
      case ADD_USER_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
        case DELETE_USER:
            return {
              ...state,
              users: state.users.filter(user => user.id !== action.payload),
              loading: false
            };

    case SET_CURRENT:
        return {
          ...state,
          current: action.payload
        };
    
        case CLEAR_CURRENT:
          return {
            ...state,
            current: null
          };
          case SET_LOADING:
            return {
              ...state,
              loading: true
            };

        default: 
        return state;
    }
    }