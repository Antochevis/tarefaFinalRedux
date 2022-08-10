import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './pages/login/Login'
import Usuarios from "./pages/usuarios/Usuarios";
import Address from "./pages/address/Address";
import People from "./pages/people/People";
import { useEffect } from "react";
import { connect } from "react-redux";
import PeopleForm from "./pages/people/PeopleForm";
import PeopleDetail from "./pages/people/PeopleDetail";
import Contact from "./pages/contact/Contact";
import { isAuth } from "./store/actions/AuthAction"
import NotFound from "./pages/notFound/NotFound"

const Routers = ({auth, dispatch}) => {

  useEffect(() => {
    isAuth(dispatch)
  }, [])
  console.log(auth.isLogged)
  if(auth.isLoading) {
    return(<h1>Loading</h1>)
  }

  return (
    <BrowserRouter>
        <Routes>
          {auth.isLogged ? (
            <>
              <Route path='/pessoa' element={<People />} /> 
              <Route path='/criar-pessoa' element={<PeopleForm />} />
              <Route path='/editar-pessoa/:id' element={<PeopleForm />} />
              <Route path='/detalhe-pessoa/:id' element={<PeopleDetail />} />
              <Route path='/editar-endereco/:id/:idEndereco' element={<Address />} />
              <Route path='/contato/:id' element={<Contact />} />
              <Route path='/editar-contato/:id/:idContato' element={<Contact />} />
              <Route path='/endereco/:id' element={<Address />} />
            </>) : (
            <>
              <Route exact path="/" element={<Login />}></Route>
              <Route path="/usuarios" element={<Usuarios />}></Route>
            </>
            )}
            <Route path='*' element={<NotFound />} />
        </Routes>
  </BrowserRouter>

  )
}

const mapStateToProps = state => ({
  auth: state.AuthReducer.auth
})

export default connect(mapStateToProps)(Routers)