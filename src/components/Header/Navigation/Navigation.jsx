import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useMedia } from 'react-use';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

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
            {t('header.categories')}
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="add" onClick={closeMobMenu} color={color}>
            {t('header.addRecipes')}
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/my" onClick={closeMobMenu} color={color}>
            {t('header.myRrecipes')}
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/favorite" onClick={closeMobMenu} color={color}>
            {t('header.favorites')}
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled
            to="/shopping-list"
            onClick={closeMobMenu}
            color={color}
          >
            {t('header.shoppingList')}
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/search" onClick={closeMobMenu} color={color}>
            <SerchWrapperNavLink>
              <SearchIconStyled stroke={color} />
              {isMobileDivice && t('header.search')}
            </SerchWrapperNavLink>
          </NavLinkStyled>
        </li>
      </ListNavLinks>
    </nav>
  );
};

export default Navigation;
