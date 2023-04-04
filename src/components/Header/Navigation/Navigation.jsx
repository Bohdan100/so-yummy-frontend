import { useMedia } from 'react-use';

import {
  ListNavLinks,
  NavLinkStyled,
  SerchWrapperNavLink,
  SearchIconStyled,
} from './Navigation.styled';

const Navigation = ({ closeMobMenu }) => {
  const isMobileDivice = useMedia('(max-width: 1439px)');

  return (
    <nav>
      <ListNavLinks>
        <li>
          <NavLinkStyled to="/categories" onClick={closeMobMenu}>
            Categories
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="add" onClick={closeMobMenu}>
            Add recipes
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/my" onClick={closeMobMenu}>
            My recipes
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/favorite" onClick={closeMobMenu}>
            Favorites
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/shopping-list" onClick={closeMobMenu}>
            Shopping list
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/search" onClick={closeMobMenu}>
            <SerchWrapperNavLink>
              <SearchIconStyled />
              {isMobileDivice && 'Search'}
            </SerchWrapperNavLink>
          </NavLinkStyled>
        </li>
      </ListNavLinks>
    </nav>
  );
};

export default Navigation;
