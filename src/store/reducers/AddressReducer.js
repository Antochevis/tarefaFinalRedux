const INITIAL_STATE = {
  address: [],
  setLoading: true,
  isUpdate: false,
  adressUpdate: null
}

function AddressReducer(state = INITIAL_STATE, action) {
  if (action.type === 'SET_ENDERECO') {
    return {
      ...state,
      address: action.address,
      setLoading: false
    }
  }

  if (action.type === 'SET_NOT_IS_UPDATE') {
    return {
      ...state,
      isUpdate: false
    }
  }

  if (action.type === 'SET_UPDATE') {
    return {
      ...state,
      isUpdate: true,
      setLoading: false,
      adressUpdate: action.adressUpdate
    }
  }

  return state
}

export default AddressReducer