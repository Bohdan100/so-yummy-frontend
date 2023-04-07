import React from 'react';

import { CardWrapper, ImageWrapper, InfoWrapper } from './FavoriteCard.styled';

// const FavoriteCard = props => {
const FavoriteCard = () => {
  // const { title, image, about } = props;

  return (
    <CardWrapper>
      <ImageWrapper>{/* <img src={image} alt={title} /> */}</ImageWrapper>
      <InfoWrapper>
        {/* <h2>{title}</h2> */}
        <h2>Title</h2>
        {/* <p>{about}</p> */}
        <p>
          Salmon eggs are rich in essential nutrients, low in calories, and
          recommended as part of a healthy diet Including salmon in a balanced
          diet can help decrease the chances of heart disease, ease
          inflammation, and more.{' '}
        </p>
      </InfoWrapper>
    </CardWrapper>
  );
};

export default FavoriteCard;
