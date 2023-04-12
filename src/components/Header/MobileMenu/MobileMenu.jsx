import Logo from 'components/Logo';
import Navigation from '../Navigation';
import ThemeToggler from '../ThemeToggler';

import {
  MobileContainer,
  LogoWrapper,
  CloseBtn,
  ThemeTogglerWrapper,
  CrossIconStyled,
} from './MobileMenu.styled';

const MobileMenu = ({ isShown, closeMobMenu }) => {
  return (
    <MobileContainer isShown={isShown}>
      <LogoWrapper>
        <Logo closeMobMenu={closeMobMenu} />
      </LogoWrapper>

      <CloseBtn type="button" onClick={closeMobMenu}>
        <CrossIconStyled />
      </CloseBtn>

      <Navigation closeMobMenu={closeMobMenu} />

      <ThemeTogglerWrapper>
        <ThemeToggler />
      </ThemeTogglerWrapper>
    </MobileContainer>
  );
};

export default MobileMenu;
