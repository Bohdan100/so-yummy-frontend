import { UserButton, UserAvatarImg } from './UserLogo.styled';

const UserLogo = () => {
  return (
    <UserButton type="button">
      <UserAvatarImg
        src="https://res.cloudinary.com/ddbvbv5sp/image/upload/v1679336722/images_s8wrdd.jpg"
        alt="user avatar"
      />
      <p>User name</p>
    </UserButton>
  );
};

export default UserLogo;
