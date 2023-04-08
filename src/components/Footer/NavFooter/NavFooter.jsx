import { NavLinkStyled, NavWraper } from './NavFooter.styled';

const NavFooter = () => {
  return (
    <NavWraper>
      <li>
        <NavLinkStyled to="/search" state={{ ingredient: true }}>
          Ingredients
        </NavLinkStyled>
      </li>
      <li>
        <NavLinkStyled to="/add">Add recipes</NavLinkStyled>
      </li>
      <li>
        <NavLinkStyled to="/my">My recipes</NavLinkStyled>
      </li>
      <li>
        <NavLinkStyled to="/favorite">Favorite</NavLinkStyled>
      </li>
      <li>
        <NavLinkStyled to="/shopping-list">Shopping list</NavLinkStyled>
      </li>
    </NavWraper>
  );
};

export default NavFooter;
