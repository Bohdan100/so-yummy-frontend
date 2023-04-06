import { NavLink } from 'react-router-dom';
import { List } from './NavFooter.styled';

const NavFooter = () => {
  return (
    <List>
      <NavLink to="/search" state={{ ingredient: true }}>
        Ingredients
      </NavLink>
      <NavLink to="/add">Add recipes</NavLink>
      <NavLink to="/my">My recipes</NavLink>
      <NavLink to="/favorite">Favorite</NavLink>
      <NavLink to="/shopping-list">Shopping list</NavLink>
    </List>
  );
};

export default NavFooter;
