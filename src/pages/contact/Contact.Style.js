import styled from "styled-components";

export const ContainerContact = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #363740;
  width: 100vw;
  min-height: 100vh;
  align-items: center;
  justify-content: center;

  > Form {
    display: flex;
    flex-direction: column;
    width: 380px;
    min-height: 340px;
    background-color: #FFFFFF;
    border: 1px solid #DFE0EB;
    border-radius: 8px;
    align-items: center;

    > div {
      width: 316px;
      display: flex;
      flex-direction: column;
      margin: 10px 10px;

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
        padding: 5px 16px;
        color: #4B506D;
      };

      select {
        background: #FCFDFE;
        border: 1px solid #F0F1F7;
        border-radius: 8px;
        height: 35px;
        padding: 5px 16px;
        color: #4B506D;
      }
    }

    > div:first-child {
      margin-top: 20px;
    }
  }
`

export const AddContactButton = styled.button`
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
  margin-bottom: 20px;
  margin-top: 30px;

  &:hover {
    background: #FFFFFF;
    color: #3751FF;
    border: 1px solid #3751FF;
    cursor: pointer;
  }
`

export const RequiredFieldsContact = styled.p`
  margin: 0;
  width: 316px;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  color: #9FA2B4;
  margin: 0;
`