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
} from './FavoriteCard.styled';

const FavoriteCard = ({ title, preview, description, time }) => {
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
          <DeleteIconStyled />
        </CookingWrapper>
      </InfoWrapper>
    </CardWrapper>
  );
};

export default FavoriteCard;
