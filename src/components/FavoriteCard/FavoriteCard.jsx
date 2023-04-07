import React from 'react';
import {
  CardWrapper,
  ImageWrapper,
  InfoWrapper,
  Title,
  Text,
  Img,
  CookingWrapper,
  Time,
  DeleteIconStyled,
  DeleteButton,
} from './FavoriteCard.styled';

const FavoriteCard = ({ title, preview, description, time, onDelete }) => {
  return (
    <CardWrapper>
      <ImageWrapper>
        <Img src={preview} alt={title} />
      </ImageWrapper>
      <InfoWrapper>
        <Title>{title}</Title>
        <Text>{description}</Text>
        <CookingWrapper>
          <Time>{time} min</Time>
          <DeleteButton onClick={onDelete}>
            <DeleteIconStyled />
          </DeleteButton>
        </CookingWrapper>
      </InfoWrapper>
    </CardWrapper>
  );
};

export default FavoriteCard;