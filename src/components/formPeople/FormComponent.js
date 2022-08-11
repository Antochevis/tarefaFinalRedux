import { Formik} from "formik"
import { maskDate, maskCPF, maskEmail } from "../../utils/masks";
import { OnlyNumbers, FormatDateBrToUsa, FormatDateUsaToBr } from "../../utils/Formatting";
//import { useContext } from 'react';
//import { PeopleContext } from '../../context/PeopleContext';
import MaskedInput from 'react-text-mask';
import { AddPersonButton, CancelAddPersonButton, ContainerAddForm, RequiredInfosPerson } from "./FormComponent.Styled";
import { useNavigate } from "react-router-dom"
import * as PeopleAction from "../../store/actions/PeopleAction"
import { useDispatch } from "react-redux";


function FormComponent({isUpdate, people, id, isLoading}) {
  //const {handleCreate, handleUpdate} = useContext(PeopleContext);
  const user = people && people[0];
  const navigate = useNavigate();
  const dispatch = useDispatch();

  /*
  if (!user && isUpdate) {
    console.log('entrei no if')
    return 
  }*/

  async function HandleCancel() {
    navigate('/pessoa')
  }

  if(isLoading){
    return (
      <div><h1>Loading</h1></div>
    )
  }

  return (
    <Formik
    initialValues={{
      nome: user ? user.nome : '' , 
      dataNascimento: user ? FormatDateUsaToBr(user.dataNascimento) : '',
      cpf: user ? user.cpf : '',
      email: user ? user.email : ''
    }}
    onSubmit={(values, actions) => {
      const newValues = {
        nome: values.nome,
        cpf: OnlyNumbers(values.cpf),
        dataNascimento: FormatDateBrToUsa(values.dataNascimento),
        email: values.email
      }
      !isUpdate ? PeopleAction.handleCreate(newValues, navigate, dispatch) : PeopleAction.handleUpdate(newValues, id, navigate)
    }}
  >
    {props => (
      <ContainerAddForm onSubmit={props.handleSubmit}>
        <h1>{isUpdate ? 'Atualizar pessoa' : 'Cadastrar nova pessoa'}</h1>
        <div>
          <label htmlFor="nome">*Nome</label>
          <input
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.nome}
            name="nome"
            placeholder='Nome'
            required
          />
        </div>
        <div>
          <label htmlFor="dataNascimento">*Data de Nascimento</label>
          <MaskedInput
            mask={maskDate}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.dataNascimento}
            name="dataNascimento"
            placeholder='Data de Nascimento'
            required
          />
        </div>
        <div>
          <label htmlFor="cpf">*CPF</label>
          <MaskedInput
            mask={maskCPF}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.cpf}
            name="cpf"
            placeholder='CPF'
            required
          />
        </div>
        <div>
          <label htmlFor="email">*E-mail</label>
          <input
            type="email"
            mask={maskEmail}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.email}
            name="email"
            placeholder='E-mail'
            required
          />
        </div>
        {props.errors.name && <div id="feedback">{props.errors.name}</div>}
        <RequiredInfosPerson>*Campos Obrigatórios</RequiredInfosPerson>
        <AddPersonButton type="submit">{isUpdate ? 'Atualizar' : 'Cadastrar'}</AddPersonButton>
        <CancelAddPersonButton onClick={HandleCancel}>Cancelar</CancelAddPersonButton>
      </ContainerAddForm>
    )}
  </Formik>
  )
}

export default FormComponent