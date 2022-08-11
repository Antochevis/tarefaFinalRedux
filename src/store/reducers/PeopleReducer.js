const INITIAL_STATE = {
  pessoas: [],
  pessoa: {},
  loading: true,
  isUpdate: false
}

function PeopleReducer(state = INITIAL_STATE, action) {
  if (action.type === 'SET_PESSOA') {
    return {
      ...state,
      pessoas: action.pessoas
    }
  }
  
  if (action.type === 'SET_PESSOA_BY_ID') {
    return {
      ...state,
      pessoa: action.pessoa,
      loading: false,
      isUpdate: true
    }
  }

  if (action.type === 'SET_NOT_IS_UPDATE') {
    return {
      ...state,
      isUpdate: false
    }
  }

  if (action.type === 'SET_CREATE_PESSOA') {
    return {
      ...state,
      loading: false
    }
  }

  if(action.type === 'SET_NAVIGATE_CREATE') {
    return {
      ...state,
      loading: false
    }
  }

  if(action.type === 'SET_NAVIGATE_UPDATE') {
    return {
      ...state,
      loading: true
    }
  }

  return state

}

export default PeopleReducer
