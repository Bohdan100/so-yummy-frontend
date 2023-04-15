import LogoutBtn from '../LogoutBtn';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
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
        <span>{t('logout.edit')}</span>
        <EditIconStyled width={'14px'} height={'14'} />
      </EditButton>
      <LogoutBtn onLogoutClick={onLogoutBtn} />
    </ModalWrapper>
  );
};

export default UserLogoModal;
