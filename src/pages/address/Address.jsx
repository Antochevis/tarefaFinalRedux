import { toast } from "react-hot-toast"
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { apiCep, apiDbc } from '../../services/api';
import { Formik, Form, Field } from 'formik';
import { IMaskInput } from "react-imask";
import { AddAddressButton, ContainerCpf, RequiredFieldsAddress } from './Address.Style';

function Address() {
  const { id } = useParams();
  const { idEndereco } = useParams();
  const [isUpdate, setIsUpdate] = useState(false);
  const [endereco, setEndereco] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/')
    }
  }, [])

  const setup = async () => {
    if (id && idEndereco) {
      setIsUpdate(true)
      try {
        const { data } = await apiDbc.get(`/endereco/${idEndereco}`)
        setEndereco(data)
      } catch (error) {
        console.log(error)
      }
    }
  }

  useEffect(() => {
    setup()
  }, [])

  async function handleCreateAddress(values) {
    try {
      await apiDbc.post(`/endereco/{idPessoa}?idPessoa=${id}`, values);
      navigate(`/detalhe-pessoa/${id}`)
      toast.success('Endereço cadastrado com sucesso')
    } catch (error) {
      toast.error('Deu erro')
    }
  }

  async function handleUpdateAddress(values) {
    try {
      await apiDbc.put(`/endereco/${idEndereco}`, values)
      navigate(`/detalhe-pessoa/${id}`)
      toast.success('Endereço atualizado com sucesso')
    } catch (error) {
      toast.error('Deu erro')
    }
  }

  async function onBlurCep(ev, setFieldValue) {
    const { value } = ev.target
    if (value?.length !== 9) {
      toast.error('Cep inválido')
      return;
    }
    const cepNovo = value.replace('-', '')
    console.log(cepNovo)

    try {
      const { data } = await apiCep.get(`/${(cepNovo)}/json/`)
      console.log(data)
      setFieldValue('logradouro', data.logradouro)
      setFieldValue('cidade', data.localidade)
      setFieldValue('estado', data.uf)
    } catch (e) {
      alert(e)
    }
  }

  if((isUpdate && endereco) || !isUpdate) {
  return (
    <ContainerCpf>
      <Formik
        initialValues={{
          idPessoa: id,
          cep: isUpdate ? endereco.cep : '',
          tipo: isUpdate ? endereco.tipo : '',
          logradouro: isUpdate ? endereco.logradouro : '',
          numero: isUpdate ? endereco.numero : '',
          cidade: isUpdate ? endereco.cidade : '',
          estado: isUpdate ? endereco.estado : '',
          pais: isUpdate ? endereco.pais : '',
          complemento: isUpdate ? endereco.complemento : ''
        }}
        onSubmit={(values, actions) => {
          console.log(values)
          values.cep = values.cep.replace('-', '')
          !isUpdate ? handleCreateAddress(values) : handleUpdateAddress(values)
        }}
      >
        {({ setFieldValue }) => (
          <Form>
            <div>
              <label htmlFor="cep">*CEP</label>
              <Field
                name="cep"
                render={({ field }) => (
                  <IMaskInput
                  {...field}
                    placeholder="Digite seu CEP"
                    required
                    id="cep"
                    mask="00000-000"
                    onBlur={(ev) => { onBlurCep(setFieldValue, ev.target.value) }}
                  />
                )}
              />
            </div>
            <div>
              <label htmlFor="tipo">*Tipo</label>
              <Field name='tipo' component="select" required>
                <option value=""></option>
                <option value="RESIDENCIAL">Residencial</option>
                <option value="COMERCIAL">Comercial</option>
              </Field>
            </div>
            <div>
              <label htmlFor="logradouro">*Rua</label>
              <Field placeholder="Digite sua rua" name='logradouro' required/>
            </div>
            <div>
              <label htmlFor="numero">*Número</label>
              <Field type='number' placeholder="Digite o número" name='numero' required/>
            </div>
            <div>
              <label htmlFor="cidade">*Cidade</label>
              <Field placeholder="Digite a sua cidade" name='cidade' required/>
            </div>
            <div>
              <label htmlFor='estado'>*Estado</label>
              <Field placeholder="Digite o seu estado" name='estado' required/>
            </div>
            <div>
              <label htmlFor='pais'>*País</label>
              <Field name='pais' placeholder="Digite o seu país" required/>
            </div>
            <div>
              <label htmlFor='complemento'>Complemento</label>
              <Field name='complemento' placeholder="Digite o seu complemento"/>
            </div>
            <RequiredFieldsAddress>*Campos Obrigatórios</RequiredFieldsAddress>
            <AddAddressButton type='submit'>{isUpdate ? 'Atualizar endereço' : 'Cadastrar endereço'}</AddAddressButton>
          </Form>
        )}
      </Formik>
    </ContainerCpf>
  )
  }
}

export default Address