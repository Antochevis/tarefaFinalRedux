import { useEffect } from "react"
import { ButtonDetails, ButtonRemove, ButtonUpdate, ContainerFlatList } from './FlatList.Styled';
import { FormatDateUsaToBr, CpfFlatList } from "../../utils/Formatting";
//import ModalDelete from '../modal/ModalDelete';
import * as PeopleAction from "../../store/actions/PeopleAction"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";

function FlatList({ list }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const pessoas = useSelector(state => state.PeopleReducer.pessoas)
  //const [isOpenModal, setIsOpenModal] = useState(false)

  async function setup () {
    PeopleAction.getPessoas(dispatch)
  }
  useEffect(() => {
    setup()
  }, [])

  /*

  async function handleUpdate(idPessoa) {
    navigate(`/editar-pessoa/${idPessoa}`)
  }

  async function handleDetail(idPessoa) {
    navigate(`/detalhe-pessoa/${idPessoa}`)
  }

  */

  /*
  function handleOpenModal() {
    setIsOpenModal(true)
  }
  */

  //<ModalDelete deleteModal={handleDeletePerson} isOpen={isOpenModal} setIsOpen={setIsOpenModal} idDelete={item.idPessoa} />

  return (
    <>
      {pessoas.map(item => (
        <ContainerFlatList key={item.idPessoa}>
          <p>{item.nome}</p>
          <p>{FormatDateUsaToBr(item.dataNascimento)}</p>
          <p>{CpfFlatList(item.cpf)}</p>
          <p>{item.email}</p>
          <div>
            <ButtonDetails onClick={() => PeopleAction.handleDetail(item.idPessoa, navigate)}>Details</ButtonDetails>
            <ButtonUpdate onClick={() => PeopleAction.navigateUpdate(item.idPessoa, navigate)}>Update</ButtonUpdate>
            <ButtonRemove onClick={() => PeopleAction.handleDelete(item.idPessoa, dispatch)}>Remove</ButtonRemove>
          </div>
        </ContainerFlatList>
      ))}
    </>
  )
}

export default FlatList