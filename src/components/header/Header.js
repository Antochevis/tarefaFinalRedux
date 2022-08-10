import { ContainerHeader } from "./Header.Styled";
import Logo from "./Logo";
import Menu from "./Menu";

function Header() {
  return (
    <ContainerHeader>
      <Logo />
      <Menu />
    </ContainerHeader>
  )
}

export default Header