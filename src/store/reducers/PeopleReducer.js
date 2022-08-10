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
      pessoas: action.pessoas,
      size: action.size
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
  return state
}

export default PeopleReducer
