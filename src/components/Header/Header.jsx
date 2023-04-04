import { useState } from 'react';
import { useMedia } from 'react-use';

import MainContainer from 'components/MainContainer';
import Logo from 'components/Logo';
import Navigation from './Navigation';
import UserLogo from './UserLogo';
import MobileMenu from './MobileMenu';

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
          <Logo inv />

          {!isMobileDevice && <Navigation />}

          <UserMenuWrapper>
            <UserLogo />
            <BurgerBtn type="button" onClick={openMobMenu}>
              <BurgerIconStyled />
            </BurgerBtn>
          </UserMenuWrapper>
        </HeaderWrapper>

        {isMobileDevice && isMobMenuOpen && (
          <MobileMenu isShown={isMobMenuOpen} closeMobMenu={closeMobMenu} />
        )}
      </MainContainer>
    </HeaderStyled>
  );
};

export default Header;
