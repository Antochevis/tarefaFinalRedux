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

export function navigateUpdate(idPessoa, navigate, dispatch) {
  const goAtualizar = {
    type: 'SET_NAVIGATE_UPDATE'
  }
  dispatch(goAtualizar)
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

export  async function handleCreate(values, navigate, dispatch) {
  try {
    await apiDbc.post(`/pessoa`, values);
    const novaPessoa = {
      type: 'SET_CREATE_PESSOA'
    }
    dispatch(novaPessoa)
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

export function handleAdd(navigate, dispatch) {
  const goCadastrar = {
    type: 'SET_NAVIGATE_CREATE'
  }
  dispatch(goCadastrar)
  navigate('/criar-pessoa')
}