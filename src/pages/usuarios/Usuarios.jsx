import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Field, Form, Formik } from 'formik';
import * as yup from "yup";
import { Logo } from "../../components/logo/Logo";
import { BackgroundRegister, RegisterButtonFormStyle, RegisterContainer, RegisterFormStyle, RegisterButtonVoltar, LogoAndTextRegister, RegisterTitle, Errors, RequiredFields } from './Usuarios.Styled';
import { useNavigate } from 'react-router-dom';

const SignupSchema = yup.object().shape({
  login: yup.string()
    .min(2, 'Mínimo de 2 caractéres')
    .max(50, 'Máximo de 50 caractéres')
    .required('Campo obrigatório!'),
  senha: yup.string()
    .min(2, 'Mínimo de 2 caractéres')
    .max(50, 'Máximo de 50 caractéres')
    .required('Campo obrigatório!')
})

function Usuarios() {
  //const navigate = useNavigate();
  
  /*
  useEffect(() => {
    const token = localStorage.getItem('token');
    if(!token) {
      navigate('/')
    }
  }, [])
  */
 
  const { handleSignUp } = useContext(AuthContext);
  const navigate = useNavigate();

  function BackLogin() {
    navigate('/')
  }

  return (
    <BackgroundRegister>
      <RegisterContainer>
        <LogoAndTextRegister>
          <Logo />
          <h2>Dashboard Kit</h2>
          <RegisterTitle>Register New User</RegisterTitle>
        </LogoAndTextRegister>
        <Formik
          initialValues={{
            login:'',
            senha:''
          }}
          validationSchema={SignupSchema}
          onSubmit={values => {
            handleSignUp(values);
          }}
        >
        {({errors, touched}) => (
          <Form>
            <RegisterFormStyle>
              <div>
                <label htmlFor="login">*Login: </label>
                <Field name='login' placeholder='Username'/>
                {errors.login && touched.login ? (<Errors>{errors.login}</Errors>) : null}
              </div>
              <div>
                <label htmlFor="senha">*Password: </label>
                <Field type='password' name='senha' placeholder='Password'/>
                {errors.senha && touched.senha ? (<Errors>{errors.senha}</Errors>) : null}
              </div>
              <div>
                <RequiredFields>*Campos obrigatórios</RequiredFields>
              </div>
            <RegisterButtonFormStyle type='submit'>Register</RegisterButtonFormStyle>
            <RegisterButtonVoltar onClick={BackLogin} type='submit'>Back</RegisterButtonVoltar>
            </RegisterFormStyle>
          </Form>
        )}
        </Formik>
      </RegisterContainer>
    </BackgroundRegister>
  )
}

export default Usuarios