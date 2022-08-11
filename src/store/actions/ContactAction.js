import { apiDbc } from "../../services/api";
import { toast } from "react-hot-toast"

export async function getContact(idPessoa, dispatch) {
  try {
    const {data} = await apiDbc.get(`contato/${idPessoa}`)
    const mostrarContato = {
      type: 'SET_CONTATO',
      contact: data
    }
    dispatch(mostrarContato)
  } catch (error) {
    alert(error)
  }
}

export async function handleContact(navigate, id) {
  navigate(`/contato/${id}`)
}

export async function handleDeleteContact(idContato, idPessoa, dispatch) {
  try {
    await apiDbc.delete(`contato/${idContato}`)
    getContact(idPessoa, dispatch)
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

export const getContactById = async (idContato, id, dispatch) => {

  const {data: listContacts} = await apiDbc.get(`/contato/${id}`)

  const contactDatas = listContacts.filter(contact => contact.idContato == idContato)

  const setContact = {
    type: "SET_UPDATE", 
    contactUpdate: contactDatas[0]
  }

  dispatch(setContact)
}