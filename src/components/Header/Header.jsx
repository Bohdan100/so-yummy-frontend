import { useState } from 'react';
import { useMedia } from 'react-use';

import MainContainer from 'components/MainContainer';
import Logo from 'components/Logo';
import Navigation from './Navigation';
import UserLogo from './UserLogo';
import ThemeToggler from './ThemeToggler';
import MobileMenu from './MobileMenu';
import Modal from 'components/Modal';

import {
  HeaderStyled,
  HeaderWrapper,
  UserMenuWrapper,
  BurgerBtn,
  BurgerIconStyled,
} from './Header.styled';

const Header = () => {
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
      <MainContainer>
        <HeaderWrapper>
          <Logo inv={'true'} />

          {!isMobileDevice && <Navigation />}

          <UserMenuWrapper>
            <UserLogo />
            <BurgerBtn type="button" onClick={openMobMenu}>
              <BurgerIconStyled />
            </BurgerBtn>
            {!isMobileDevice && <ThemeToggler />}
          </UserMenuWrapper>
        </HeaderWrapper>

        {isMobileDevice && isMobMenuOpen && (
          <Modal onClose={closeMobMenu}>
            <MobileMenu isShown={isMobMenuOpen} closeMobMenu={closeMobMenu} />
          </Modal>
        )}
      </MainContainer>
    </HeaderStyled>
  );
};

export default Header;
