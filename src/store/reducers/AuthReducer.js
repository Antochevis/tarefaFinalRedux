const INITIAL_STATE = {
  auth: {
    token: '',
    isLogged: false,
    isLoading: true
  }
}

function AuthReducer(state = INITIAL_STATE, action) {
  if (action.type === 'SET_LOGIN') {
    console.log(action)
    return {
      auth: {
        ...state,
        token: action.token,
        isLogged: true,
        isLoading: false
      }
    }
  }

  if (action.type === 'SET_LOADING') {
    return {
      auth: {
        ...state,
        isLoading: false
      }
    }
  }

  if (action.type === 'SET_LOGOUT') {
    return {
      auth: {
        ...state,
        token: '',
        isLogged: false,
        isLoading: false
      }
    }
  }
  return state
}

export default AuthReducer