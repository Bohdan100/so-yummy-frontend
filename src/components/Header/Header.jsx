import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useMedia } from 'react-use';
import { selectTheme } from 'redux/Theme/themeSelectors';

import { MainContainerTwo } from './Header.styled';
import Logo from 'components/Logo';
import Navigation from './Navigation';
import UserLogo from './UserLogo';
import ThemeToggler from './ThemeToggler';
import MobileMenu from './MobileMenu';
import Modal from 'components/Modal';
import LangSwitcher from 'components/LangSwitcher';

import {
  HeaderStyled,
  HeaderWrapper,
  UserMenuWrapper,
  BurgerBtn,
  BurgerIconStyled,
} from './Header.styled';

const Header = () => {
  const { pathname } = useLocation();
  const theme = useSelector(selectTheme);
  const isRecipesPage = pathname.includes('recipes');

  const color =
    isRecipesPage || theme === 'light' ? '#22252A' : '#FAFAFA';

  const [isMobMenuOpen, setIsMobMenuOpen] = useState(false);
  const isMobileDevice = useMedia('(max-width: 1439px)');

  const openMobMenu = () => {
    setIsMobMenuOpen(true);
  };

  const closeMobMenu = () => {
    setIsMobMenuOpen(false);
  };

  return (
    <HeaderStyled>
      <MainContainerTwo>
        <HeaderWrapper>
          <Logo inv={'true'} />

          {!isMobileDevice && <Navigation />}

          <UserMenuWrapper>
            <LangSwitcher />
            <UserLogo />
            <BurgerBtn type="button" onClick={openMobMenu}>
              <BurgerIconStyled stroke={color} />
            </BurgerBtn>
            {!isMobileDevice && <ThemeToggler />}
          </UserMenuWrapper>
        </HeaderWrapper>

        {isMobileDevice && isMobMenuOpen && (
          <Modal onClose={closeMobMenu}>
            <MobileMenu isShown={isMobMenuOpen} closeMobMenu={closeMobMenu} />
          </Modal>
        )}
      </MainContainerTwo>
    </HeaderStyled>
  );
};

export default Header;
