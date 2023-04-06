// TODO: Добавить логику по взятию инфо про юзера из редакса
import { useState } from 'react';
import { UserButton, UserAvatarImg } from './UserLogo.styled';
import Modal from 'components/Modal';
import UserLogoModal from '../UserLogoModal';
import UserInfoModal from '../UserInfoModal';
import LogoutModal from '../LogoutModal';

const UserLogo = () => {
  const [isUserLogoModalOpen, setIsUserLogoModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const closeUserLogoModal = () => {
    setIsUserLogoModalOpen(false);
  };

  const openUserInfoModal = () => {
    setIsEditModalOpen(true);
  };

  const closeUserInfoModal = () => {
    setIsEditModalOpen(false);
  };

  const openLogoutModal = () => {
    setIsLogoutModalOpen(true);
  };

  const closeLogoutModal = () => {
    setIsLogoutModalOpen(false);
  };

  return (
    <>
      <UserButton
        type="button"
        onClick={() => setIsUserLogoModalOpen(!isUserLogoModalOpen)}
      >
        <UserAvatarImg
          src="https://res.cloudinary.com/ddbvbv5sp/image/upload/v1679336722/images_s8wrdd.jpg"
          alt="user avatar"
        />
        <p>User name</p>
      </UserButton>

      {isUserLogoModalOpen && (
        <Modal onClose={closeUserLogoModal}>
          <UserLogoModal
            closeUserLogoModal={closeUserLogoModal}
            isShown={isUserLogoModalOpen}
            openEditModal={openUserInfoModal}
            openLogoutModal={openLogoutModal}
          />
        </Modal>
      )}

      {isEditModalOpen && !isUserLogoModalOpen && (
        <Modal onClose={closeUserInfoModal}>
          <UserInfoModal
            isShown={isEditModalOpen}
            closeUserInfoModal={closeUserInfoModal}
          />
        </Modal>
      )}

      {isLogoutModalOpen && !isUserLogoModalOpen && (
        <Modal onClose={closeLogoutModal}>
          <LogoutModal closeLogoutModal={closeLogoutModal} />
        </Modal>
      )}
    </>
  );
};

export default UserLogo;
