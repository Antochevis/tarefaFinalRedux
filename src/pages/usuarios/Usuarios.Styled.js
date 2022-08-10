import styled from "styled-components";


export const BackgroundRegister = styled.div`
  background-color: #363740;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  height: 582px;
  background: #FFFFFF;
  border: 1px solid #DFE0EB;
  border-radius: 8px;
  align-items: center;
`

export const LogoAndTextRegister = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  margin-top: 40px;

  img {
    width: 48px
  }

  h2 {
    color: #A4A6B3;
    opacity: 0.7;
    letter-spacing: 0.4px;
    font-size: 19px;
    line-height: 24px;
    margin: 0;
  }
`
export const RegisterFormStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  gap: 24px;

  div:nth-child(-n + 2) {
    display: flex;
    flex-direction: column;
    width: 316px;
    gap: 6px;
    height: 70px;

    label {
      font-size: 12px;
      line-height: 15px;
      letter-spacing: 0.3px;
      text-transform: uppercase;
      color: #9FA2B4;
    }

    input {
      background: #FCFDFE;
      border: 1px solid #F0F1F7;
      border-radius: 8px;
      height: 42px;
      padding: 11px 16px;
      color: #4B506D;
    };
  }

  div:nth-child(3){
    display: flex;
    flex-direction: column;
    width: 316px;
    align-items: flex-start;
  }
`

export const RegisterButtonFormStyle = styled.button`
  height: 48px;
  width: 316px;
  background: #3751FF;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #FFFFFF;

  &:hover {
    background: #FFFFFF;
    color: #3751FF;
    border: 1px solid #3751FF;
    cursor: pointer;
  }
`

export const RegisterButtonVoltar = styled.button`
  height: 34px;
  width: 150px;
  background: #3751FF;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #FFFFFF;

  &:hover {
    background: #FFFFFF;
    color: #3751FF;
    border: 1px solid #3751FF;
    cursor: pointer;
  }
`

export const RegisterTitle = styled.h1`
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0.3px;
  color: #252733;
  margin-top: 32px;
  margin-bottom: 12px;
`

export const Errors = styled.p`
  color: red;
  font-size: 12px;
  font-weight: bold;
  margin-top: 0;
`

export const RequiredFields = styled.p`
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  color: #9FA2B4;
  margin: 0;
`