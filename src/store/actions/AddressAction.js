import { apiDbc } from "../../services/api";
import { toast } from "react-hot-toast"

export async function getAddress(idPessoa, dispatch) {
  try {
    const {data} = await apiDbc.get(`endereco/retorna-por-id-pessoa?idPessoa=${idPessoa}`)
    const mostrarEndereco = {
      type: 'SET_ENDERECO',
      address: data
    }
    dispatch(mostrarEndereco)
  } catch (error) {
    alert(error)
  }
}

export async function handleCreateAddress(values, navigate, id) {
  try {
    await apiDbc.post(`/endereco/{idPessoa}?idPessoa=${id}`, values);
    navigate(`/detalhe-pessoa/${id}`)
    toast.success('Endereço cadastrado com sucesso')
  } catch (error) {
    toast.error('Deu erro')
  }
}

export async function handleUpdateAddress(values, navigate, idEndereco, id) {
  try {
    await apiDbc.put(`/endereco/${idEndereco}`, values)
    navigate(`/detalhe-pessoa/${id}`)
    toast.success('Endereço atualizado com sucesso')
  } catch (error) {
    toast.error('Deu erro')
  }
}


export async function handleAddress(navigate, id) {
  navigate(`/endereco/${id}`)
}

export async function handleDeleteAddress(idEndereco, idPessoa, dispatch) {
  try {
    await apiDbc.delete(`endereco/${idEndereco}`)
    getAddress(idPessoa, dispatch)
    toast.success('Endereço excluído com sucesso')
  } catch (error) {
    toast.error('Deu erro')
  }
}

export async function goAddress(idEndereco, id, navigate) {
  navigate(`/editar-endereco/${id}/${idEndereco}`)
}

export const getAddressById = async (idAddress, dispatch) => {

  try {
    const {data: datasAddress} = await apiDbc.get(`endereco/${idAddress}`)

    const setAddressDatasUpdate = {
      type: 'SET_UPDATE', 
      addressUpdate: datasAddress
    }

    dispatch(setAddressDatasUpdate)

  } catch(Error){
    console.log(Error)
  }
}