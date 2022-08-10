import { apiDbc } from "../../services/api";
import { toast } from "react-hot-toast"

export async function getPessoas(dispatch) {
  try {
    const {data} = await apiDbc.get('/pessoa?pagina=0&tamanhoDasPaginas=100')
    const pessoas = {
      type: 'SET_PESSOA',
      pessoas: data.content
    }
    dispatch(pessoas)
  } catch (error) {
    alert(error);
  }
}

export function navigateUpdate(idPessoa, navigate) {
  navigate(`/editar-pessoa/${idPessoa}`)
}

export  async function handleDetail(idPessoa, navigate) {
  navigate(`/detalhe-pessoa/${idPessoa}`)
}

export async function getPessoaById(id, dispatch) {
  try {
    const {data} = await apiDbc.get(`/pessoa/lista-completa?idPessoa=${id}`)
    const editarPessoa = {
      type: 'SET_PESSOA_BY_ID',
      pessoa: data && data[0]
    }
    dispatch(editarPessoa)
  } catch (error) {
    alert(error);
  }
}

export  async function handleCreate(values, navigate) {
  try {
    await apiDbc.post(`/pessoa`, values);
    navigate('/pessoa');
    toast.success('Pessoa cadastrada')
  } catch (error) {
    toast.error('Deu erro')
  }
}

export async function handleDelete(idPessoa, dispatch) {
  try {
    await apiDbc.delete(`/pessoa/${idPessoa}`)
    getPessoas(dispatch);
    toast.success('Pessoa excluída com sucesso')
  } catch (error) {
    toast.error(error)
  }
}

export async function handleUpdate(values, id, navigate) {
  try {
    await apiDbc.put(`/pessoa/${id}`, values)
    navigate('/pessoa');
    toast.success('Pessoa atualizada com sucesso')
  } catch (error) {
    toast.error('Deu erro')
  }
}