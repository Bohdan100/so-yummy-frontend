import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useMedia } from 'react-use';
import { selectTheme } from 'redux/Theme/themeSelectors';

import {
  ListNavLinks,
  NavLinkStyled,
  SerchWrapperNavLink,
  SearchIconStyled,
} from './Navigation.styled';

const Navigation = ({ closeMobMenu }) => {
  const isMobileDivice = useMedia('(max-width: 1439px)');
  const { pathname } = useLocation();
  const theme = useSelector(selectTheme);
  const isRecipesPage = pathname.includes('recipes');

  let color;

  if ((isRecipesPage && !isMobileDivice) || theme === 'light') {
    color = '#23262A';
  } else if (theme === 'dark') {
    color = '#FAFAFA';
  }

  return (
    <nav>
      <ListNavLinks>
        <li>
          <NavLinkStyled to="/categories" onClick={closeMobMenu} color={color}>
            Categories
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="add" onClick={closeMobMenu} color={color}>
            Add recipes
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/my" onClick={closeMobMenu} color={color}>
            My recipes
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/favorite" onClick={closeMobMenu} color={color}>
            Favorites
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled
            to="/shopping-list"
            onClick={closeMobMenu}
            color={color}
          >
            Shopping list
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/search" onClick={closeMobMenu} color={color}>
            <SerchWrapperNavLink>
              <SearchIconStyled stroke={color} />
              {isMobileDivice && 'Search'}
            </SerchWrapperNavLink>
          </NavLinkStyled>
        </li>
      </ListNavLinks>
    </nav>
  );
};

export default Navigation;
