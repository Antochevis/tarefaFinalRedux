import { apiDbc } from "../../services/api";
import { toast } from "react-hot-toast"

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

export async function getAddress(idPessoa, dispatch) {
  try {
    const {data} = await apiDbc.get(`endereco/retorna-por-id-pessoa?idPessoa=${idPessoa}`)
    console.log(data)
    const mostrarEndereco = {
      type: ''
    }
    dispatch(mostrarEndereco)
  } catch (error) {
    alert(error)
  }
}

export async function handleAddress(navigate, id) {
  navigate(`/endereco/${id}`)
}

export async function handleDeleteAddress(idEndereco) {
  try {
    await apiDbc.delete(`endereco/${idEndereco}`)
    //setup()
    toast.success('Endereço excluído com sucesso')
  } catch (error) {
    toast.error('Deu erro')
  }
}

export async function goAddress(idEndereco, id, navigate) {
  navigate(`/editar-endereco/${id}/${idEndereco}`)
}