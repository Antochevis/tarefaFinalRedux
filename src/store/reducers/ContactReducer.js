const INITIAL_STATE = {
  contact: [],
  isLoading: true,
  isUpdate: false,
  contactUpdate: null
}

function ContactReducer(state = INITIAL_STATE, action) {
  if (action.type === 'SET_CONTATO') {
    return {
      contact: action.contact,
      isLoading: false
    }
  }

  if (action.type === 'SET_NOT_IS_UPDATE') {
    return {
      ...state,
      isUpdate: false
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
      isLoading: false,
      contactUpdate: action.contactUpdate
    }
  }

  return state
}

export default ContactReducer