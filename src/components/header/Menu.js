import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { HeaderNav, HeaderNavButton, HeaderNavUl } from "./Header.Styled";
import Item from "./Item"


function Menu() {

  const {auth, handleLogout} = useContext(AuthContext);

  return (
    
    <HeaderNav>
      <HeaderNavUl>
        {!auth ? 
        (<>
          <Item name='Login' url='/'/>
          <Item name='Cadastrar usuário' url='/usuarios'/> </>) : 
        (<>
          <Item name='Endereço' url='/endereco'/>
          <Item name='Pessoa' url='/pessoa' />
        </>)}
      </HeaderNavUl>
      {auth && <HeaderNavButton onClick={handleLogout}>Sair</HeaderNavButton>}
    </HeaderNav>
    
  )
}

export default Menu