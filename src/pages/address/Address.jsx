import { toast } from "react-hot-toast"
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { apiCep } from '../../services/api';
import { Formik, Form, Field } from 'formik';
import { IMaskInput } from "react-imask";
import { AddAddressButton, ContainerCpf, RequiredFieldsAddress } from './Address.Style';
import { useDispatch, useSelector } from "react-redux";
import * as AddressAction from "../../store/actions/AddressAction"

function Address() {
  const { id } = useParams();
  const { idEndereco } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const endereco = useSelector(state => state.AddressReducer.adressUpdate)
  const isUpdate = useSelector(state => state.AddressReducer.isUpdate)
  const [isLoading, setIsLoading] = useState(true);

  async function setup() {
    if(id && idEndereco) {
      await AddressAction.getAddressById(idEndereco, dispatch)
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

  useEffect(() => {
    
  }, [endereco])

  if(isLoading) {
    return (
      <h1>Loading</h1>
    )
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

  return (
    <ContainerCpf>
      <Formik
        initialValues={{
          idPessoa: id,
          cep: isUpdate && endereco  ? endereco.cep : '',
          tipo: isUpdate && endereco ? endereco.tipo : '',
          logradouro: isUpdate && endereco ? endereco.logradouro : '',
          numero: isUpdate && endereco ? endereco.numero : '',
          cidade: isUpdate && endereco ? endereco.cidade : '',
          estado: isUpdate && endereco ? endereco.estado : '',
          pais: isUpdate && endereco ? endereco.pais : '',
          complemento: isUpdate && endereco ? endereco.complemento : ''
        }}
        onSubmit={(values, actions) => {
          console.log(values)
          values.cep = values.cep.replace('-', '')
          !isUpdate ? AddressAction.handleCreateAddress(values, navigate, id) : AddressAction.handleUpdateAddress(values, navigate, idEndereco, id)
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

export default Address