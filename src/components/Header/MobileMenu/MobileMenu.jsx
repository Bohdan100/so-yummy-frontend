import Logo from 'components/Logo';
import Navigation from '../Navigation';
import ThemeToggler from '../ThemeToggler';
import { ReactComponent as CrossIcon } from '../../../images/icons/close.svg';

import {
  MobileContainer,
  LogoWrapper,
  CloseBtn,
  ThemeTogglerWrapper,
} from './MobileMenu.styled';

const MobileMenu = ({ isShown, closeMobMenu }) => {
  return (
    <MobileContainer isShown={isShown}>
      <LogoWrapper>
        <Logo closeMobMenu={closeMobMenu} />
      </LogoWrapper>

      <CloseBtn type="button" onClick={closeMobMenu}>
        <CrossIcon size={32} />
      </CloseBtn>

      <Navigation closeMobMenu={closeMobMenu} />

      <ThemeTogglerWrapper>
        <ThemeToggler />
      </ThemeTogglerWrapper>
    </MobileContainer>
  );
};

export default MobileMenu;
