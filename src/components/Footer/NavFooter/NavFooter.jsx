import { Link, NavWraper } from './NavFooter.styled';

const NavFooter = () => {
  return (
    <NavWraper>
      <Link to="/search" state={{ ingredient: true }}>
        Ingredients
      </Link>
      <Link to="/add">Add recipes</Link>
      <Link to="/my">My recipes</Link>
      <Link to="/favorite">Favorite</Link>
      <Link to="/shopping-list">Shopping list</Link>
    </NavWraper>
  );
};

export default NavFooter;
