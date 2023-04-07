import React from 'react';

import {
  CardWrapper,
  ImageWrapper,
  InfoWrapper,
  Title,
  Text,
} from './FavoriteCard.styled';

// const cookingTime = [
//   { key: 'Cooking time', value: '' },
//   { key: '20 min', value: '20 min' },
//   { key: '30 min', value: '30 min' },
//   { key: '40 min', value: '40 min' },
//   { key: '50 min', value: '50 min' },
//   { key: '60 min', value: '60 min' },
//   { key: '90 min', value: '90 min' },
// ];

// const FavoriteCard = props => {
const FavoriteCard = () => {
  // const { title, image, about } = props;

  return (
    <CardWrapper>
      {/* <ImageWrapper><img src={image} alt={title} /></ImageWrapper> */}
      <ImageWrapper>
        <img src={image} alt={title} />
      </ImageWrapper>
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

const FavoriteCard = props => {
  const { title, preview, description } = props;

  return (
    <CardWrapper>
      <ImageWrapper>
        <img src={preview} alt={title} />
      </ImageWrapper>
      <InfoWrapper>
        <h2>{title}</h2>
        <p>{description}</p>
      </InfoWrapper>
    </CardWrapper>
  );
};
