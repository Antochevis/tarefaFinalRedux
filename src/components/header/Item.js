import { Link } from "react-router-dom"
import { HeaderNavLink } from "./Header.Styled"

function Item({name, url}) {
  return (
    <HeaderNavLink><Link to={url}>{name}</Link></HeaderNavLink>
  )
}

export default Item