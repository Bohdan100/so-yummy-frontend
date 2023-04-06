import LogoutBtn from '../LogoutBtn';

import {
  ModalWrapper,
  EditButton,
  EditIconStyled,
} from './UserLogoModal.styled';

const UserLogoModal = ({
  isShown,
  openEditModal,
  closeUserLogoModal,
  openLogoutModal,
}) => {
  const onEditBtnClick = () => {
    closeUserLogoModal();
    openEditModal();
  };

  const onLogoutBtn = () => {
    openLogoutModal();
    closeUserLogoModal();
  };
  return (
    <ModalWrapper isShown={isShown}>
      <EditButton type="button" onClick={onEditBtnClick}>
        <span>Edit profile</span>
        <EditIconStyled width={'14px'} height={'14'} />
      </EditButton>
      <LogoutBtn onLogoutClick={onLogoutBtn} />
    </ModalWrapper>
  );
};

export default UserLogoModal;
