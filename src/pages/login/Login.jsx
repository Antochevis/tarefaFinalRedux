import { Formik, Field, Form } from "formik";
import * as yup from "yup";
import { Logo } from "../../components/logo/Logo";
import { BackgroundPage, ButtonFormStyle, Errors, FormStyle, LoginContainer, LogoAndText, Signup, Title } from "./Login.Styled";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import * as AuthAction from "../../store/actions/AuthAction"

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

const Login = ({auth, dispatch}) => {

  const navigate = useNavigate()

  function GoToRegister(){
    navigate('/usuarios')
  }

  return (
    <BackgroundPage>
      <LoginContainer>
        <LogoAndText>
          <Logo />
          <h2>Dashboard Kit</h2>
        </LogoAndText>
        <Title>Log In to Dashboard Kit</Title>
        <h3>Enter your email and password below</h3>
        <Formik
          initialValues={{
            login:'',
            senha:''
          }}
          validationSchema={SignupSchema}
          onSubmit={values => {
            AuthAction.handleLogin(values, navigate, dispatch);
          }}
        >
        {({errors, touched}) => (
          <Form>
            <FormStyle>
              <div>
                <label htmlFor="login">*Login: </label>
                <Field name='login' placeholder='Username' />
                {errors.login && touched.login ? (<Errors>{errors.login}</Errors>) : null}
              </div>
              <div>
                <label htmlFor="senha">*Password: </label>
                <Field type='password' name='senha' placeholder='Password'/>
                {errors.senha && touched.senha ? (<Errors>{errors.senha}</Errors>) : null}
              </div>
              <div>
                <p>*Campos Obrigatórios</p>
              </div>
              <ButtonFormStyle type="submit">Log In</ButtonFormStyle>
            </FormStyle>
          </Form>
        )}
        </Formik>
        <div>
          <p>Don’t have an account?</p>
          <Signup onClick={GoToRegister}>Sign up</Signup>
        </div>
      </LoginContainer>
    </BackgroundPage>
  )
}

/*const mapDispatchToProps = dispatch => ({
  handleLogin: (values, navigate) => dispatch(AuthAction.handleLogin(values, dispatch, navigate))
})*/

const mapStateToProps = state => ({
  auth: state.AuthReducer.auth
})

export default connect(mapStateToProps)(Login)