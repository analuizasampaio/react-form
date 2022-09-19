import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <NavLink to="/"> Home</NavLink>
      <NavLink to="/formulario"> formulario</NavLink>
      <NavLink to="/conteudo"> Conteudo</NavLink>
    </header>
  );
}

export default Header;
