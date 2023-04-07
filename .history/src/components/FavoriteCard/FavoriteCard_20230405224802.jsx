import React from 'react';

import {
  CardWrapper,
  ImageWrapper,
  InfoWrapper,
  Title,
  Text,
} from './FavoriteCard.styled';

// const FavoriteCard = props => {
const FavoriteCard = () => {
  // const { title, image, about } = props;

  return (
    <CardWrapper>
      <ImageWrapper>{/* <img src={image} alt={title} /> */}</ImageWrapper>
      <InfoWrapper>
        {/* <h2>{title}</h2> */}
        <Title>Title</Title>
        {/* <p>{about}</p> */}
        <Text>
          Salmon eggs are rich in essential nutrients, low in calories, and
          recommended as part of a healthy diet Including salmon in a balanced
          diet can help decrease the chances of heart disease, ease
          inflammation, and more.{' '}
        </Text>
      </InfoWrapper>
    </CardWrapper>
  );
};

export default FavoriteCard;
