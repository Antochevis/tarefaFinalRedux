import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ButtonRemove, ButtonsDetailsPerson, ButtonsDetailsPersonAddress, ButtonUpdate, ContainerDetailPerson, DetailPerson, InfosAddress, InfosAddressApi, InfosContact, InfosContatcApi, NoInfos, UserItens } from "./People.Styled";
import { FormatDateUsaToBr, CpfFlatList } from "../../utils/Formatting";
import { CepDetailPeople } from "../../utils/Formatting";
import ModalDelete from "../../components/modal/ModalDelete";
import * as ContactAction from "../../store/actions/ContactAction"
import * as AddressAction from "../../store/actions/AddressAction"
import * as PeopleAction from "../../store/actions/PeopleAction"
import { useDispatch, useSelector } from "react-redux";

function PeopleDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  const address = useSelector(state => state.AddressReducer.address)
  const contact = useSelector(state => state.ContactReducer.contact)
  const pessoa = useSelector(state => state.PeopleReducer.pessoa)

  const [isOpen, setIsOpen] = useState(false)

  async function setup() {
    await PeopleAction.getPessoaById(id, dispatch)
    await ContactAction.getContact(id, dispatch)
    await AddressAction.getAddress(id, dispatch)
  }
  useEffect(() => {
    setup()
  }, [])

  async function backToPeople() {
    navigate(`/pessoa`)
  }

  /*
  function handleOpenModal() {
    setIsOpen(true)
  }

  <ModalDelete deleteModal={AddressAction.handleDeleteAddress} isOpen={isOpen} setIsOpen={setIsOpen} idDelete={item.idEndereco} idPessoa={item.idPessoa} />
  <ModalDelete deleteModal={ContactAction.handleDeleteContact} isOpen={isOpen} setIsOpen={setIsOpen} idDelete={item.idContato} />
  */

  return (
    <ContainerDetailPerson>

      <DetailPerson>
        <p>Nome: {pessoa.nome}</p>
        <UserItens>
          <p>Data de nascimento: {FormatDateUsaToBr(pessoa.dataNascimento)}</p>
          <p>CPF: {(pessoa.cpf)}</p>
          <p>E-mail: {pessoa.email}</p>
        </UserItens>
        <InfosAddress>
          <p>CEP</p>
          <p>Tipo</p>
          <p>Rua</p>
          <p>Número</p>
          <p>Cidade</p>
          <p>Estado</p>
          <p>País</p>
          <p>Complemento</p>
          <p>Ações</p>
        </InfosAddress>
        {address.length > 0 ?
          address.map(item => (
            <InfosAddressApi key={item.idPessoa}>
              <p>{CepDetailPeople(item.cep)}</p>
              <p>{item.tipo}</p>
              <p>{item.logradouro}</p>
              <p>{item.numero}</p>
              <p>{item.cidade}</p>
              <p>{item.estado}</p>
              <p>{item.pais}</p>
              <p>{item.complemento}</p>
              <div>
                <ButtonUpdate onClick={() => AddressAction.goAddress(item.idEndereco, id, navigate)}>Editar</ButtonUpdate>
                <ButtonRemove onClick={() => AddressAction.handleDeleteAddress(item.idEndereco, id, dispatch)}>Excluir</ButtonRemove>
              </div>
            </InfosAddressApi>
          )) : <NoInfos>Ainda não há endereços cadastrados</NoInfos>}
        <ButtonsDetailsPersonAddress>
          <button onClick={() => AddressAction.handleAddress(navigate, id)}>Cadastrar Endereço</button>
        </ButtonsDetailsPersonAddress>
        <InfosContact>
          <p>Tipo</p>
          <p>Telefone</p>
          <p>Descrição</p>
          <p>Ações</p>
        </InfosContact>
        {contact.length > 0 ?
          contact.map(item => (
            <InfosContatcApi key={item.idPessoa}>
              <p>{item.tipoContato}</p>
              <p>{item.telefone}</p>
              <p>{item.descricao}</p>
              <div>
                <ButtonUpdate onClick={() => ContactAction.goContact(item.idContato, id, navigate)}>Editar</ButtonUpdate>
                <ButtonRemove onClick={() => ContactAction.handleDeleteContact(item.idContato, id, dispatch)}>Excluir</ButtonRemove>
              </div>
            </InfosContatcApi>
          )) : <NoInfos>Ainda não há contatos cadastrados</NoInfos>}
        <ButtonsDetailsPerson>
          <button onClick={backToPeople}>Voltar</button>
          <button onClick={() => ContactAction.handleContact(navigate, id)}>Cadastrar Contato</button>
        </ButtonsDetailsPerson>

      </DetailPerson>

    </ContainerDetailPerson>
  )
}

export default PeopleDetail