// TODO: Добавить логику при нажатии на лог аут
import {
  ModalWrapper,
  CrossBtb,
  CrossIconStyled,
  ConfirmTitle,
  BtnWrapper,
  LogoutBtn,
  CancelBtn,
} from './LogoutModal.styled';

const LogoutModal = ({ isShown, closeLogoutModal }) => {
  return (
    <ModalWrapper isShown={isShown}>
      <CrossBtb type="button" onClick={closeLogoutModal}>
        <CrossIconStyled />
      </CrossBtb>
      <ConfirmTitle>Are you sure you want to log out?</ConfirmTitle>
      <BtnWrapper>
        <LogoutBtn type="button">Log out</LogoutBtn>
        <CancelBtn type="button" onClick={closeLogoutModal}>
          Cancel
        </CancelBtn>
      </BtnWrapper>
    </ModalWrapper>
  );
};

export default LogoutModal;
