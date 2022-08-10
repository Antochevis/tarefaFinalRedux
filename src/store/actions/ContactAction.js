import { apiDbc } from "../../services/api";
import { toast } from "react-hot-toast"

export async function getContact(idPessoa, dispatch) {
  try {
    const {data} = await apiDbc.get(`contato/${idPessoa}`)
    console.log(data)
    const mostrarContato = {
      type: ''
    }
    dispatch(mostrarContato)
  } catch (error) {
    alert(error)
  }
}

export async function handleContact(navigate, id) {
  navigate(`/contato/${id}`)
}

export async function handleDeleteContact(idContato) {
  try {
    await apiDbc.delete(`contato/${idContato}`)
    //setup()
    toast.success('Contato excluído com sucesso')
  } catch (error) {
    toast.error('Deu erro')
  }
}

export async function goContact(idContato, id, navigate) {
  navigate(`/editar-contato/${id}/${idContato}`)
}

export async function handleCreateContact(values, id, navigate) {
  try {
    await apiDbc.post(`/contato/${id}`, values);
    navigate(`/detalhe-pessoa/${id}`)
    toast.success('Contato cadastrado com sucesso')
  } catch (error) {
    toast.error('Deu erro')
  }
}

export async function handleUpdateContact(values, idContato, id, navigate) {
  try {
    await apiDbc.put(`/contato/${idContato}`, values)
    navigate(`/detalhe-pessoa/${id}`)
    toast.success('Contato atualizado com sucesso')
  } catch (error) {
    toast.error('Deu erro')
  }
}
