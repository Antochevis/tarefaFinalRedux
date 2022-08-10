/*import { createContext, useState, useEffect } from "react";
import { apiDbc } from "../services/api";
import { Toaster, toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom";


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      apiDbc.defaults.headers.common['Authorization'] = token
      setAuth(true)
    }
    setLoading(false)
  }, [])

  async function handleLogin(user) {
    try {
      const { data } = await apiDbc.post('/auth', user);
      localStorage.setItem('token', data)
      apiDbc.defaults.headers.common['Authorization'] = data
      setAuth(true)
      navigate('/pessoa')
      toast.success('Logado com sucesso')
    } catch (e) {
      toast.error('Deu erro')
    }
  }

  async function handleSignUp(values) {
    try {
      await apiDbc.post('/auth/create', values)
      navigate('/')
      toast.success('Cadastrado com sucesso')
    } catch (e) {
      toast.error('Deu erro')
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    apiDbc.defaults.headers.common['Authorization'] = undefined
    setAuth(false)
    navigate('/')
    toast.success('Tchau!')
  }

  if (loading) {
    return (
      <h1>Loading</h1>
    )
  }

  return (
    <AuthContext.Provider value={{ handleLogin, handleLogout, handleSignUp, auth }}>
      {children}
      <Toaster />
    </AuthContext.Provider>
  )

}

export { AuthContext, AuthProvider }*/