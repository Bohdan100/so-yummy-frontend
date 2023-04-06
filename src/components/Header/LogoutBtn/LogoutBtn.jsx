import { LogOutBtnStyled, ArrowIconStyled } from './LogoutBtn.styled';

const LogoutBtn = ({ onLogoutClick }) => {
  return (
    <LogOutBtnStyled onClick={onLogoutClick}>
      <span>Log out</span>
      <ArrowIconStyled />
    </LogOutBtnStyled>
  );
};

export default LogoutBtn;
