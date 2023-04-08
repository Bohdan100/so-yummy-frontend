import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { logout } from 'redux/Auth/authOperations';
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
  const dispatch = useDispatch();

  const handleLogoutBtn = () => {
    dispatch(logout())
      .unwrap()
      .then(() => toast.success('You have successfully logged out'))
      .catch(() =>
        toast.error('Something went wrong...Try reloading the page')
      );
    closeLogoutModal();
  };
  return (
    <ModalWrapper isShown={isShown}>
      <CrossBtb type="button" onClick={closeLogoutModal}>
        <CrossIconStyled />
      </CrossBtb>
      <ConfirmTitle>Are you sure you want to log out?</ConfirmTitle>
      <BtnWrapper>
        <LogoutBtn type="button" onClick={handleLogoutBtn}>
          Log out
        </LogoutBtn>
        <CancelBtn type="button" onClick={closeLogoutModal}>
          Cancel
        </CancelBtn>
      </BtnWrapper>
    </ModalWrapper>
  );
};

export default LogoutModal;
