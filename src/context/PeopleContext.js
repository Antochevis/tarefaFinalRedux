/*import { createContext, useState } from "react";
import { apiDbc } from "../services/api";
import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom";

const PeopleContext = createContext();

function PeopleProvider({children}) {

  const [pessoas, setPessoas] = useState([]);
  const [pessoa, setPessoa] = useState([]);
  const navigate = useNavigate()

  async function getPessoaById(id) {
    try {
      const {data} = await apiDbc.get(`/pessoa/lista-completa?idPessoa=${id}`)
      setPessoa(data);
    } catch (error) {
      alert(error);
    }
  }

  async function getPessoas() {
    try {
      const {data} = await apiDbc.get('/pessoa?pagina=0&tamanhoDasPaginas=100')
      setPessoas(data.content);
    } catch (error) {
      alert(error);
    }
  }

  async function handleCreate(values) {
    try {
      console.log('entrei no try')
      await apiDbc.post(`/pessoa`, values);
      navigate('/pessoa');
      toast.success('Pessoa cadastrada')
    } catch (error) {
      toast.error('Deu erro')
    }
  }

  async function handleDelete(idPessoa) {
    try {
      await apiDbc.delete(`/pessoa/${idPessoa}`)
      getPessoas();
    } catch (error) {
      alert(error)
    }
  }

  function navigateUpdate(idPessoa) {
    window.location.href = `/editar-pessoa/${idPessoa}`
  }

  async function handleUpdate(values, id) {
    try {
      await apiDbc.put(`/pessoa/${id}`, values)
      navigate('/pessoa');
      toast.success('Pessoa atualizada com sucesso')
    } catch (error) {
      toast.error('Deu erro')
    }
  }

  return (
    <PeopleContext.Provider value={{
      handleDelete,
      navigateUpdate,
      pessoas,
      getPessoas,
      handleCreate,
      pessoa,
      getPessoaById,
      handleUpdate
    }}>
      {children}
    </PeopleContext.Provider>
  )
}

export {PeopleContext, PeopleProvider}*/