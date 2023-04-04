import Logo from 'components/Logo';
import Navigation from '../Navigation';
import ThemeToggler from '../ThemeToggler';
import { ReactComponent as CrossIcon } from '../../../images/icons/close.svg';

import { MobileConteiner, LogoWrapper, CloseBtn } from './MobileMenu.styled';

const MobileMenu = ({ isShown, closeMobMenu }) => {
  return (
    <MobileConteiner isShown={isShown}>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>

      <CloseBtn type="button" onClick={closeMobMenu}>
        <CrossIcon size={32} />
      </CloseBtn>

      <Navigation closeMobMenu={closeMobMenu} />

      <ThemeToggler />
    </MobileConteiner>
  );
};

export default MobileMenu;
