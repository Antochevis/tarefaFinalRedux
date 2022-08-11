import { toast } from "react-hot-toast"
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { Formik, Form, Field } from 'formik';
import { IMaskInput } from "react-imask";
import { AddContactButton, ContainerContact, RequiredFieldsContact } from "./Contact.Style";
import { useDispatch, useSelector } from "react-redux";
import * as ContactAction from "../../store/actions/ContactAction"


function Contact() {
  const { id } = useParams();
  const { idContato } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const contato = useSelector(state => state.ContactReducer.contactUpdate);
  const isUpdate = useSelector(state => state.ContactReducer.isUpdate)
  const [isLoading, setIsLoading] = useState(true);

  async function setup() {
    if (id && idContato) {
      ContactAction.getContactById(idContato, id, dispatch)
    } else {
      dispatch({
        type: 'SET_NOT_IS_UPDATE'
      })
    }
    setIsLoading(false)
  }
  useEffect(() => {
    setup()
  }, [])

  if (isLoading) {
    return (
      <h1>Loading</h1>
    )
  }

  async function onBlurTelefone(ev, setFieldValue) {
    const { value } = ev.target
    if (value?.length !== 14) {
      toast.error('Telefone inválido')
      return;
    }
  }

  return (
    <ContainerContact>
      <Formik
        initialValues={{
          idPessoa: id,
          tipoContato: isUpdate && contato ? contato.tipoContato : '',
          telefone: isUpdate && contato ? contato.telefone : '',
          descricao: isUpdate && contato ? contato.descricao : '',
        }}
        onSubmit={(values, actions) => {
          console.log(values)
          !isUpdate ? ContactAction.handleCreateContact(values, id, navigate) : ContactAction.handleUpdateContact(values, idContato, id, navigate)
        }}
      >
        {({ setFieldValue }) => (
          <Form>
            <div>
              <label htmlFor="tipoContato">*Tipo</label>
              <Field name='tipoContato' component="select" required>
                <option value=""></option>
                <option value="RESIDENCIAL">Residencial</option>
                <option value="COMERCIAL">Comercial</option>
              </Field>
            </div>
            <div>
              <label htmlFor="telefone">*Telefone</label>
              <Field
                name="telefone"
                render={({ field }) => (
                  <IMaskInput
                    {...field}
                    placeholder="Digite seu telefone"
                    required
                    id="telefone"
                    mask="(00)00000-0000"
                    onBlur={(ev) => { onBlurTelefone(setFieldValue, ev.target.value) }}
                  />
                )}
              />
            </div>
            <div>
              <label htmlFor="descricao">*Descrição</label>
              <Field placeholder="Digite a descrição do contato" name='descricao' required />
            </div>
            <RequiredFieldsContact>*Campos Obrigatórios</RequiredFieldsContact>
            <AddContactButton type='submit'>{isUpdate ? 'Atualizar contato' : 'Cadastrar contato'}</AddContactButton>
          </Form>
        )}
      </Formik>
    </ContainerContact>
  )

}

export default Contact