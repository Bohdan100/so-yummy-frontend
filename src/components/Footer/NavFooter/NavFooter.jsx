import { scrollToTop } from 'helpers';
import { useTranslation } from 'react-i18next';
import { NavLinkStyled, NavWraper } from './NavFooter.styled';

const NavFooter = () => {
  const { t } = useTranslation();

  return (
    <NavWraper>
      <li>
        <NavLinkStyled
          to="/search?type=Ingredients"
          state={{ ingredient: true }}
          onClick={scrollToTop}
        >
          {t('footer.nav.ingredients')}
        </NavLinkStyled>
      </li>
      <li>
        <NavLinkStyled to="/add" onClick={scrollToTop}>
         {t('footer.nav.addRecipes')}
        </NavLinkStyled>
      </li>
      <li>
        <NavLinkStyled to="/my" onClick={scrollToTop}>
          {t('footer.nav.myRrecipes')}
        </NavLinkStyled>
      </li>
      <li>
        <NavLinkStyled to="/favorite" onClick={scrollToTop}>
          {t('footer.nav.favorites')}
        </NavLinkStyled>
      </li>
      <li>
        <NavLinkStyled to="/shopping-list" onClick={scrollToTop}>
          {t('footer.nav.shoppingList')}
        </NavLinkStyled>
      </li>
    </NavWraper>
  );
};

export default NavFooter;
