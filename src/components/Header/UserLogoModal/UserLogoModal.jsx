import {
  ModalWrapper,
  EditButton,
  EditIconStyled,
  LogOutBtn,
  ArrowIconStyled,
} from './UserLogoModal.styled';

const UserLogoModal = ({ isShown, openEditModal, closeUserLogoModal }) => {
  const onEditBtnClick = () => {
    closeUserLogoModal();
    openEditModal();
  };
  return (
    <ModalWrapper isShown={isShown}>
      <EditButton type="button" onClick={onEditBtnClick}>
        <span>Edit profile</span>
        <EditIconStyled width={'14px'} height={'14'} />
      </EditButton>
      <LogOutBtn>
        <span>Log out</span>
        <ArrowIconStyled />
      </LogOutBtn>
    </ModalWrapper>
  );
};

export default UserLogoModal;
