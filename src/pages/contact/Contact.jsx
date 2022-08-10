import { toast } from "react-hot-toast"
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { apiDbc } from '../../services/api';
import { Formik, Form, Field } from 'formik';
import { IMaskInput } from "react-imask";
import { AddContactButton, ContainerContact, RequiredFieldsContact } from "./Contact.Style";


function Contact() {
  const { id } = useParams();
  const { idContato } = useParams();
  const [isUpdate, setIsUpdate] = useState(false);
  const [contato, setContato] = useState();
  const navigate = useNavigate();


  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/')
    }
  }, [])

  const setup = async () => {
    if (id && idContato) {
      setIsUpdate(true)
      try {
        const { data:listaContato } = await apiDbc.get(`/contato/${id}`)
        const infosContato = listaContato.filter(contato => contato.idContato == idContato)
        setContato(infosContato[0])
      } catch (error) {
        console.log(error)
      }
    }
  }

  useEffect(() => {
    setup()
  }, [])

  async function handleCreateContact(values) {
    try {
      await apiDbc.post(`/contato/${id}`, values);
      navigate(`/detalhe-pessoa/${id}`)
      toast.success('Contato cadastrado com sucesso')
    } catch (error) {
      toast.error('Deu erro')
    }
  }

  async function handleUpdateContact(values) {
    try {
      await apiDbc.put(`/contato/${idContato}`, values)
      navigate(`/detalhe-pessoa/${id}`)
      toast.success('Contato atualizado com sucesso')
    } catch (error) {
      toast.error('Deu erro')
    }
  }

  async function onBlurTelefone(ev, setFieldValue) {
    const { value } = ev.target
    if (value?.length !== 14) {
      toast.error('Telefone inválido')
      return;
    }
  }

  if((isUpdate && contato) || !isUpdate) {
    return (
    <ContainerContact>
      <Formik
        initialValues={{
          idPessoa: id,
          tipoContato: isUpdate ? contato.tipoContato : '',
          telefone: isUpdate ? contato.telefone : '',
          descricao: isUpdate ? contato.descricao : '',
        }}
        onSubmit={(values, actions) => {
          console.log(values)
          !isUpdate ? handleCreateContact(values) : handleUpdateContact(values)
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
              <Field placeholder="Digite a descrição do contato" name='descricao' required/>
            </div>
            <RequiredFieldsContact>*Campos Obrigatórios</RequiredFieldsContact>
            <AddContactButton type='submit'>{isUpdate ? 'Atualizar endereço' : 'Cadastrar endereço'}</AddContactButton>
          </Form>
        )}
      </Formik>
    </ContainerContact>
    )
  }
}

export default Contact