import { createContext } from "react";
import { apiDbc } from "../services/api";
import { useNavigate, useParams } from "react-router-dom";

const AddressContext = createContext()

function AddressProvider({children}) {
  const navigate = useNavigate()
  const { id } = useParams
  const { idEndereco } = useParams


  async function handleCreateAddress(values) {
    try {
      await apiDbc.post(`/endereco/{idPessoa}?idPessoa=${id}`, values);
      alert('endereco cadastrado com sucesso')
      navigate('/pessoa')
    } catch (error) {
      alert(error)
    }
  }

  async function handleUpdateAddress(values) {
    try {
      await apiDbc.put(`/endereco/${idEndereco}`, values)
      alert('endereco editado com sucesso')
      navigate('/pessoa')
    } catch (error) {
      alert(error)
    }
  }

  return (
    <AddressContext.Provider value={{
      handleUpdateAddress,
      handleCreateAddress,
    }}>
      {children}
    </AddressContext.Provider>
  )
}

export {AddressContext, AddressProvider}