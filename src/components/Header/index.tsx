import { HeaderContainer } from "./styles";

import Logo from '../../assets/Logo.svg'
import { NavLink } from "react-router-dom";

export function Header(){
  return (
    <HeaderContainer >
      <NavLink to={'/'}>
       <img src={Logo} alt="" />
      </NavLink>
    </HeaderContainer>
  )
}