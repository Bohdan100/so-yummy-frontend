import React from 'react';

import {
  CardWrapper,
  ImageWrapper,
  InfoWrapper,
  Title,
  Text,
  Img,
} from './FavoriteCard.styled';

const FavoriteCard = ({ title, preview, description }) => {
  return (
    <CardWrapper>
      <ImageWrapper>
        <Img src={preview} alt={title} />
      </ImageWrapper>
      <InfoWrapper>
        <Title>{title}</Title>
        <Text>{description}</Text>
      </InfoWrapper>
    </CardWrapper>
  );
};

export default FavoriteCard;
