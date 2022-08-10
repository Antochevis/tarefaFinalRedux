import styled from "styled-components";


export const ContainerFlatList = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr 1.5fr;
  padding-left: 32px;
  align-items: center;
  border-bottom: 1px solid #DFE0EB;;
  height: 92px;
  

  > p {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.2px;
    color: #252733;
  }

  > div {
    display: flex;
    gap: 10px;
  }
`

export const ButtonRemove = styled.div`
  background: #F12B2C;
  border-radius: 100px;
  font-weight: 700;
  font-size: 11px;
  line-height: 14px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #FFFFFF;
  width: 75px;
  height: 24px;

  &:hover {
    background: #FFFFFF;
    color: #F12B2C;
    border: 1px solid #F12B2C;
    cursor: pointer;
    width: 73px;
    height: 22px;
  }
`

export const ButtonUpdate = styled.div`
  background: #FEC400;
  border-radius: 100px;
  font-weight: 700;
  font-size: 11px;
  line-height: 14px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #FFFFFF;
  width: 75px;
  height: 24px;

  &:hover {
    background: #FFFFFF;
    color: #FEC400;
    border: 1px solid #FEC400;
    cursor: pointer;
    width: 73px;
    height: 22px;
  }
`

export const ButtonDetails = styled.div`
  background: #29CC97;
  border-radius: 100px;
  font-weight: 700;
  font-size: 11px;
  line-height: 14px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #FFFFFF;
  width: 75px;
  height: 24px;

  &:hover {
    background: #FFFFFF;
    color: #29CC97;
    border: 1px solid #29CC97;
    cursor: pointer;
    width: 73px;
    height: 22px;
  }
`