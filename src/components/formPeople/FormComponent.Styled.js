import styled from "styled-components";


export const ContainerAddForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 380px;
  height: 582px;
  background-color: #FFF;
  border: 1px solid #DFE0EB;
  border-radius: 8px;
  justify-content: center;
  align-items: center;

  > h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    letter-spacing: 0.3px;
    color: #252733;
    margin-bottom: 30px;
    margin-top: 0;
  }

  > div {
    display: flex;
    flex-direction: column;
    padding: 0 32px;
    padding-bottom: 24px;
    width: 316px;

    > label {
      font-weight: 700;
      font-size: 12px;
      line-height: 15px;
      letter-spacing: 0.3px;
      text-transform: uppercase;
      color: #9FA2B4;
      margin-bottom: 6px;
    }

    input {
      background: #FCFDFE;
      border: 1px solid #F0F1F7;
      border-radius: 8px;
      height: 20px;
      padding: 11px 16px;
      color: #4B506D;
    };
  }
`

export const RequiredInfosPerson = styled.p`
  margin: 0;
  width: 316px;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  color: #9FA2B4;
  margin: 0;
`

export const AddPersonButton = styled.button`
  width: 316px;
  height: 48px;
  background: #3751FF;
  box-shadow: 0px 4px 12px rgba(55, 81, 255, 0.24);
  border-radius: 8px;
  border: none;
  color: #FFFFFF;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.2px;
  margin-top: 25px;

  &:hover {
    background: #FFFFFF;
    color: #3751FF;
    border: 1px solid #3751FF;
    cursor: pointer;
  }
`

export const CancelAddPersonButton = styled.button`
display: flex;
  width: 150px;
  height: 30px;
  background: #3751FF;
  box-shadow: 0px 4px 12px rgba(55, 81, 255, 0.24);
  border-radius: 8px;
  border: none;
  color: #FFFFFF;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.2px;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #FFFFFF;
    color: #3751FF;
    border: 1px solid #3751FF;
    cursor: pointer;
  }
`