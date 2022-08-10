import { apiDbc } from "../../services/api";
import { toast } from "react-hot-toast"

export async function handleLogin(user, navigate, dispatch) {
  try {
    const { data } = await apiDbc.post('/auth', user);
    const logado = {
      type: 'SET_LOGIN',
      token: data,
      isLogged: true
    }
    dispatch(logado)
    localStorage.setItem('token', data)
    apiDbc.defaults.headers.common['Authorization'] = data
    navigate('/pessoa')
    toast.success('Logado com sucesso')
  } catch (e) {
    toast.error('Deu erro')
  }
}

export function isAuth(dispatch) {
  const token = localStorage.getItem('token')
  if(token) {
    apiDbc.defaults.headers.common['Authorization'] = token
    const logado = {
      type: 'SET_LOGIN',
      token: token,
      isLogged: true
    }
    dispatch(logado)
  } 
  dispatch({
    type: 'SET_LOADING'
  })
}

export async function handleSignUp(values, navigate) {
  try {
    await apiDbc.post('/auth/create', values)
    navigate('/')
    toast.success('Cadastrado com sucesso')
  } catch (e) {
    toast.error('Deu erro')
  }
}

export const handleLogout = (navigate, dispatch) => {
  const deslogado = {
    type: 'SET_LOGOUT'
  }
  localStorage.removeItem('token')
  apiDbc.defaults.headers.common['Authorization'] = undefined
  dispatch(deslogado)
  navigate('/')
  toast.success('Tchau!')
}
