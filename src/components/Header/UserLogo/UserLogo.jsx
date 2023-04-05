// TODO: Добавить логику по взятию инфо про юзера из редакса
import { useState } from 'react';
import { UserButton, UserAvatarImg } from './UserLogo.styled';
import Modal from 'components/Modal';
import UserLogoModal from '../UserLogoModal';
import UserInfoModal from '../UserInfoModal';

const UserLogo = () => {
  const [isUserLogoModalOpen, setIsUserLogoModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const closeUserLogoModal = () => {
    setIsUserLogoModalOpen(false);
  };

  const openUserInfoModal = () => {
    setIsEditModalOpen(true);
  };

  const closeUserInfoModal = () => {
    setIsEditModalOpen(false);
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
    </>
  );
};

export default UserLogo;
