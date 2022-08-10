import { useContext, useState, useEffect } from "react";
import { PeopleContext } from "../../context/PeopleContext";
import { useNavigate, useParams } from "react-router-dom";
import { ButtonRemove, ButtonsDetailsPerson, ButtonsDetailsPersonAddress, ButtonUpdate, ContainerDetailPerson, DetailPerson, InfosAddress, InfosAddressApi, InfosContact, InfosContatcApi, NoInfos, UserItens } from "./People.Styled";
import { FormatDateUsaToBr, CpfFlatList } from "../../utils/Formatting";
import { apiDbc } from "../../services/api";
import { CepDetailPeople } from "../../utils/Formatting";
import { toast } from "react-hot-toast"
import ModalDelete from "../../components/modal/ModalDelete";

function PeopleDetail() {
  const {getPessoaById, pessoa} = useContext(PeopleContext)
  const {id} = useParams();
  const navigate = useNavigate()
  const [address, setAddress] = useState([]);
  const [contact, setContact] = useState([]);
  const [isOpen, setIsOpen] = useState(false)

  async function getContact(idPessoa) {
    try {
      const {data} = await apiDbc.get(`contato/${idPessoa}`)
      setContact(data)
    } catch (error) {
      alert(error)
    }
  }

  async function getAddress(idPessoa) {
    try {
      const {data} = await apiDbc.get(`endereco/retorna-por-id-pessoa?idPessoa=${idPessoa}`)
      console.log(data)
      setAddress(data)
    } catch (error) {
      alert(error)
    }
  }

  async function setup() {
    getPessoaById(id)
    getAddress(id)
    getContact(id)
  }
  
  useEffect(() => {
    setup()
  }, [])

  async function handleAddress() {
    navigate(`/endereco/${id}`)
  }

  async function handleContact() {
    navigate(`/contato/${id}`)
  }

  async function backToPeople() {
    navigate(`/pessoa`)
  }

  async function handleDeleteAddress(idEndereco) {
    try {
      await apiDbc.delete(`endereco/${idEndereco}`)
      setup()
      toast.success('Endereço excluído com sucesso')
    } catch (error) {
      toast.error('Deu erro')
    }
  }

  async function handleDeleteContact(idContato) {
    try {
      await apiDbc.delete(`contato/${idContato}`)
      setup()
      toast.success('Contato excluído com sucesso')
    } catch (error) {
      toast.error('Deu erro')
    }
  }

  async function goAddress(idEndereco) {
    navigate(`/editar-endereco/${id}/${idEndereco}`)
  }

  async function goContact(idContato) {
    navigate(`/editar-contato/${id}/${idContato}`)
  }

  function handleOpenModal() {
    setIsOpen(true)
  }


  return (
    <ContainerDetailPerson>
      {pessoa.map(item => (
        <DetailPerson key={item.idPessoa}>
          <p>Nome: {item.nome}</p>
          <UserItens>
            <p>Data de nascimento: {FormatDateUsaToBr(item.dataNascimento)}</p>
            <p>CPF: {CpfFlatList(item.cpf)}</p>
            <p>E-mail: {item.email}</p>
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
                <ButtonUpdate onClick={() => goAddress(item.idEndereco)}>Editar</ButtonUpdate>
                <ButtonRemove onClick={handleOpenModal}>Excluir</ButtonRemove>
              </div>
              <ModalDelete deleteModal={handleDeleteAddress} isOpen={isOpen} setIsOpen={setIsOpen} idDelete={item.idEndereco} />
            </InfosAddressApi>
          )) : <NoInfos>Ainda não há endereços cadastrados</NoInfos> }
          <ButtonsDetailsPersonAddress>
            <button onClick={handleAddress}>Cadastrar Endereço</button>
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
                <ButtonUpdate onClick={() => goContact(item.idContato)}>Editar</ButtonUpdate>
                <ButtonRemove onClick={handleOpenModal}>Excluir</ButtonRemove>
                <ModalDelete deleteModal={handleDeleteContact} isOpen={isOpen} setIsOpen={setIsOpen} idDelete={item.idContato} />
              </div>
            </InfosContatcApi>
          )) : <NoInfos>Ainda não há contatos cadastrados</NoInfos> }
          <ButtonsDetailsPerson>
            <button onClick={backToPeople}>Voltar</button>
            <button onClick={handleContact}>Cadastrar Contato</button>
          </ButtonsDetailsPerson>

        </DetailPerson>
      ))}
    </ContainerDetailPerson>
  )
}

export default PeopleDetail