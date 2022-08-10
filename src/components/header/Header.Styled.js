import styled from "styled-components";


export const ContainerHeader = styled.header`
  display: flex;
  flex-direction: column;
  width: 382px;
  margin: 30px auto 0 auto;
  border: 1px solid black;
  border-bottom: none;
  align-items: center;
`

export const HeaderNavLink = styled.li`
  list-style-type: none;
  text-decoration: none;
`

export const HeaderNavUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 0;
`

export const HeaderNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const HeaderNavButton = styled.button`
  height: 30px;
  width: 70px;
  margin-bottom: 20px;
`